from flask import Blueprint, request, jsonify
from bson import ObjectId
import bcrypt
import functools
import jwt
from datetime import datetime, timedelta

from db import get_collection
import config

auth_bp = Blueprint('auth', __name__)


def _user_safe(user_doc: dict):
    if not user_doc:
        return None
    user_doc = dict(user_doc)
    user_doc['id'] = str(user_doc.get('_id'))
    user_doc.pop('_id', None)
    user_doc.pop('password', None)
    return user_doc


def generate_token(user_id, role):
    payload = {
        'user_id': str(user_id),
        'role': role,
        'exp': datetime.utcnow() + config.JWT_EXP_DELTA,
        'iat': datetime.utcnow()
    }
    token = jwt.encode(payload, config.JWT_SECRET, algorithm=config.JWT_ALGORITHM)
    # pyjwt may return bytes in older versions; ensure str
    if isinstance(token, bytes):
        token = token.decode('utf-8')
    return token


def token_required(f):
    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        auth_header = request.headers.get('Authorization', '')
        if not auth_header.startswith('Bearer '):
            return jsonify({'error': 'Authorization header missing or invalid'}), 401
        token = auth_header.split(' ', 1)[1].strip()
        try:
            payload = jwt.decode(token, config.JWT_SECRET, algorithms=[config.JWT_ALGORITHM])
        except jwt.ExpiredSignatureError:
            return jsonify({'error': 'Token expired'}), 401
        except Exception:
            return jsonify({'error': 'Invalid token'}), 401
        # Load the current user so deleted/deactivated accounts and role changes take effect immediately.
        user_id = payload.get('user_id')
        user = None
        if isinstance(user_id, str) and ObjectId.is_valid(user_id):
            user = get_collection('users').find_one({'_id': ObjectId(user_id)})
        if not user or user.get('status', 'active') != 'active':
            return jsonify({'error': 'Account not found or inactive'}), 401
        request.user = {'user_id': str(user['_id']), 'role': user.get('role')}
        return f(*args, **kwargs)
    return wrapper


def _str(value, max_len=300):
    """Return a trimmed string, or None if the value is not a string (blocks `{"$ne": ...}` style input)."""
    if value is None:
        return ''
    if not isinstance(value, str):
        return None
    return value.strip()[:max_len]


# Profile fields users may set on themselves (anything else in the request is ignored).
PROFILE_FIELDS = ('dateOfBirth', 'gender', 'phone', 'address', 'bloodType', 'specialization')


def _clean_profile(data: dict):
    profile = {}
    for key in PROFILE_FIELDS:
        if key in data:
            val = _str(data.get(key))
            if val is None:
                return None, f'{key} must be text'
            profile[key] = val
    if 'allergies' in data:
        allergies = data.get('allergies')
        if not isinstance(allergies, list) or not all(isinstance(a, str) for a in allergies):
            return None, 'allergies must be a list of text'
        profile['allergies'] = [a.strip()[:100] for a in allergies if a.strip()][:50]
    if 'emergencyContact' in data:
        ec = data.get('emergencyContact') or {}
        if not isinstance(ec, dict):
            return None, 'emergencyContact must be an object'
        cleaned = {k: _str(ec.get(k), 100) for k in ('name', 'relationship', 'phone')}
        if None in cleaned.values():
            return None, 'emergencyContact fields must be text'
        profile['emergencyContact'] = cleaned
    return profile, None


@auth_bp.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json(silent=True) or {}
    # Accept either a single 'name' field or separate 'firstName' and 'lastName'
    name = _str(data.get('name'), 120)
    if not name:
        # support both camelCase and snake_case keys from different frontends
        first = _str(data.get('firstName') or data.get('first_name'), 60)
        last = _str(data.get('lastName') or data.get('last_name'), 60)
        if first is None or last is None:
            return jsonify({'error': 'name must be text'}), 400
        name = f"{first} {last}".strip()
    email = _str(data.get('email'), 254)
    password = data.get('password')
    # Public sign-up always creates a patient. Doctor/admin accounts are created by an admin
    # (previously any visitor could register themselves as "admin").
    role = 'patient'

    if not name or not email or not isinstance(password, str) or not password:
        return jsonify({'error': 'name, email and password are required'}), 400
    email = email.lower()
    if '@' not in email or len(password) < 6:
        return jsonify({'error': 'A valid email and a password of at least 6 characters are required'}), 400
    profile, err = _clean_profile(data)
    if err:
        return jsonify({'error': err}), 400

    users = get_collection('users')
    if users.find_one({'email': email}):
        return jsonify({'error': 'Email already registered'}), 400

    # Hash password
    pw_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    user_doc = {
        'name': name,
        'email': email,
        'password': pw_hash.decode('utf-8'),
        'role': role,
        'status': 'active',
        'profile': profile,
        'created_at': datetime.utcnow()
    }
    result = users.insert_one(user_doc)
    return jsonify({'success': True, 'user_id': str(result.inserted_id)}), 201


@auth_bp.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json(silent=True) or {}
    email = (_str(data.get('email'), 254) or '').lower()
    password = data.get('password')

    if not email or not isinstance(password, str) or not password:
        return jsonify({'error': 'email and password are required'}), 400

    users = get_collection('users')
    user = users.find_one({'email': email})
    if not user:
        return jsonify({'error': 'Invalid credentials'}), 401

    stored = user.get('password', '')
    try:
        if not bcrypt.checkpw(password.encode('utf-8'), stored.encode('utf-8')):
            return jsonify({'error': 'Invalid credentials'}), 401
    except Exception:
        return jsonify({'error': 'Invalid credentials'}), 401

    if user.get('status', 'active') != 'active':
        return jsonify({'error': 'This account has been deactivated'}), 403

    user['last_login'] = datetime.utcnow()
    users.update_one({'_id': user['_id']}, {'$set': {'last_login': user['last_login']}})
    token = generate_token(user_id=user.get('_id'), role=user.get('role'))
    safe = _user_safe(user)
    return jsonify({'token': token, 'user': safe})


@auth_bp.route('/api/users/me', methods=['GET'])
@token_required
def me():
    user_id = request.user.get('user_id')
    if not user_id:
        return jsonify({'error': 'Unauthorized'}), 401
    users = get_collection('users')
    user = users.find_one({'_id': ObjectId(user_id)})
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({'user': _user_safe(user)})


@auth_bp.route('/api/users/me', methods=['PUT'])
@token_required
def update_me():
    """Update the signed-in user's own name, email and profile (used by the Profile page)."""
    data = request.get_json(silent=True) or {}
    users = get_collection('users')
    uid = ObjectId(request.user['user_id'])
    updates = {}

    if 'firstName' in data or 'lastName' in data or 'name' in data:
        name = _str(data.get('name'), 120)
        if not name:
            first, last = _str(data.get('firstName'), 60), _str(data.get('lastName'), 60)
            if first is None or last is None:
                return jsonify({'error': 'name must be text'}), 400
            name = f"{first} {last}".strip()
        if not name:
            return jsonify({'error': 'Name is required'}), 400
        updates['name'] = name

    if 'email' in data:
        email = (_str(data.get('email'), 254) or '').lower()
        if '@' not in email:
            return jsonify({'error': 'Invalid email'}), 400
        if users.find_one({'email': email, '_id': {'$ne': uid}}):
            return jsonify({'error': 'Email already registered'}), 400
        updates['email'] = email

    profile, err = _clean_profile(data)
    if err:
        return jsonify({'error': err}), 400
    for key, val in profile.items():
        updates[f'profile.{key}'] = val

    if not updates:
        return jsonify({'error': 'No valid fields to update'}), 400
    updates['updated_at'] = datetime.utcnow()
    users.update_one({'_id': uid}, {'$set': updates})
    return jsonify({'user': _user_safe(users.find_one({'_id': uid}))})

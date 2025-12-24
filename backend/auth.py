from flask import Blueprint, request, jsonify
from bson import ObjectId
import bcrypt
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
        # attach user info to request context via flask.g
        request.user = {'user_id': payload.get('user_id'), 'role': payload.get('role')}
        return f(*args, **kwargs)
    wrapper.__name__ = f.__name__
    return wrapper


@auth_bp.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json(silent=True) or {}
    # Accept either a single 'name' field or separate 'firstName' and 'lastName'
    name = data.get('name')
    if not name:
        # support both camelCase and snake_case keys from different frontends
        first = data.get('firstName') or data.get('first_name')
        last = data.get('lastName') or data.get('last_name')
        if first or last:
            name = f"{(first or '').strip()} {(last or '').strip()}".strip()
    email = (data.get('email') or '').lower().strip()
    password = data.get('password')
    role = data.get('role') or 'patient'

    if not name or not email or not password:
        return jsonify({'error': 'name, email and password are required'}), 400

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
        'created_at': datetime.utcnow()
    }
    result = users.insert_one(user_doc)
    return jsonify({'success': True, 'user_id': str(result.inserted_id)}), 201


@auth_bp.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json(silent=True) or {}
    email = (data.get('email') or '').lower().strip()
    password = data.get('password')

    if not email or not password:
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

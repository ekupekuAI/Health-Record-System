from flask import Blueprint, request, jsonify
from bson import ObjectId
import bcrypt
from datetime import datetime

from db import get_collection
from auth import token_required

admin_bp = Blueprint('admin', __name__)


def _sanitize_user(doc: dict):
    if not doc:
        return None
    u = dict(doc)
    u['id'] = str(u.get('_id'))
    u['_id'] = str(u.get('_id'))
    u.pop('password', None)
    # normalize createdAt/created_at
    # These timestamps are stored in UTC: add 'Z' so browsers don't read them as local time.
    if 'created_at' in u:
        u['createdAt'] = u['created_at'].isoformat() + 'Z' if hasattr(u['created_at'], 'isoformat') else u['created_at']
    elif 'createdAt' not in u:
        u['createdAt'] = ''
    last_login = u.pop('last_login', None)
    u['lastLogin'] = last_login.isoformat() + 'Z' if hasattr(last_login, 'isoformat') else ''
    # ensure status
    u['status'] = u.get('status', 'active')
    return u


def _require_admin(user):
    if not user or user.get('role') != 'admin':
        return False
    return True


@admin_bp.route('/api/users/<user_id>', methods=['GET'])
@token_required
def get_user(user_id):
    """Fetch a single user by id with role-based authorization.

    - Admin: can fetch any user
    - Doctor: can fetch patients they have appointments with
    - Patient: can fetch only their own user record
    Returns JSON: { user: { id, name, email, role, status, createdAt } }
    """
    requester = request.user or {}
    role = requester.get('role')
    uid = requester.get('user_id')

    col = get_collection('users')
    try:
        target = col.find_one({'_id': ObjectId(user_id)})
    except Exception:
        target = None
    if not target:
        return jsonify({'error': 'User not found'}), 404

    target_id_str = str(target.get('_id'))

    # Any signed-in user may see a doctor's public card (needed to show doctor names on appointments).
    if target.get('role') == 'doctor' and role != 'admin' and uid != target_id_str:
        return jsonify({'user': {
            'id': target_id_str,
            '_id': target_id_str,
            'name': target.get('name'),
            'role': 'doctor',
            'profile': {'specialization': (target.get('profile') or {}).get('specialization', '')},
        }})

    # Authorization checks
    if role == 'admin' or uid == target_id_str:
        pass
    elif role == 'patient':
        if uid != target_id_str:
            return jsonify({'error': 'Forbidden'}), 403
    elif role == 'doctor':
        # allow if doctor has an appointment with this patient
        appt_col = get_collection('appointments')
        found = appt_col.find_one({'doctor_id': uid, 'patient_id': target_id_str})
        if not found:
            return jsonify({'error': 'Forbidden'}), 403
    else:
        return jsonify({'error': 'Unauthorized role'}), 403

    created_at = target.get('created_at')
    created_at_iso = created_at.isoformat() if hasattr(created_at, 'isoformat') else (created_at or '')

    resp = {
        'id': target_id_str,
        '_id': target_id_str,  # the frontend reads `_id`
        'profile': target.get('profile') or {},
        'name': target.get('name'),
        'email': target.get('email'),
        'role': target.get('role'),
        'status': target.get('status', 'active'),
        'createdAt': created_at_iso
    }

    return jsonify({'user': resp})


@admin_bp.route('/api/admin/users', methods=['GET'])
@admin_bp.route('/api/users', methods=['GET'])
@token_required
def list_users():
    user = request.user or {}
    role_q = (request.args.get('role') or '').strip()
    # allow authenticated users to fetch doctors list only
    if role_q == 'doctor':
        if not user:
            return jsonify({'error': 'Authentication required'}), 401
        col = get_collection('users')
        # Accounts created before `status` existed have no status field: treat them as active.
        docs = list(col.find({'role': 'doctor', 'status': {'$ne': 'inactive'}}).sort('created_at', -1))
        users = []
        for d in docs:
            u = _sanitize_user(d)
            if user.get('role') != 'admin':
                # Non-admins only need a public card for the booking dropdown.
                u = {k: u.get(k) for k in ('id', '_id', 'name', 'role', 'status')}
                u['profile'] = {'specialization': (d.get('profile') or {}).get('specialization', '')}
            users.append(u)
        return jsonify({'users': users})

    # otherwise require admin
    if not _require_admin(user):
        return jsonify({'error': 'Admin access required'}), 403

    col = get_collection('users')
    docs = list(col.find({}).sort('created_at', -1))
    users = []
    for d in docs:
        u = _sanitize_user(d)
        users.append(u)
    return jsonify({'users': users})


@admin_bp.route('/api/admin/users', methods=['POST'])
@admin_bp.route('/api/users', methods=['POST'])
@token_required
def create_user():
    user = request.user or {}
    if not _require_admin(user):
        return jsonify({'error': 'Admin access required'}), 403

    data = request.get_json(silent=True) or {}
    name = data.get('name') or ''
    email = data.get('email') or ''
    password = data.get('password')
    role = data.get('role') or 'patient'
    status = data.get('status') or 'active'
    if not all(isinstance(v, str) for v in (name, email, role, status)) or not isinstance(password, str):
        return jsonify({'error': 'Invalid user data'}), 400
    name, email = name.strip(), email.lower().strip()

    if not name or not email or not password:
        return jsonify({'error': 'name, email and password are required'}), 400

    if role not in ('patient', 'doctor', 'admin'):
        return jsonify({'error': 'Invalid role'}), 400
    if status not in ('active', 'inactive'):
        return jsonify({'error': 'Invalid status'}), 400

    col = get_collection('users')
    if col.find_one({'email': email}):
        return jsonify({'error': 'Email already registered'}), 400

    pw_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    doc = {
        'name': name,
        'email': email,
        'password': pw_hash.decode('utf-8'),
        'role': role,
        'status': status,
        'created_at': datetime.utcnow()
    }
    res = col.insert_one(doc)
    created = col.find_one({'_id': res.inserted_id})
    return jsonify({'user': _sanitize_user(created)}), 201


@admin_bp.route('/api/admin/users/<user_id>', methods=['PUT'])
@admin_bp.route('/api/users/<user_id>', methods=['PUT'])
@token_required
def update_user(user_id):
    user = request.user or {}
    if not _require_admin(user):
        return jsonify({'error': 'Admin access required'}), 403

    data = request.get_json(silent=True) or {}
    updates = {}
    col = get_collection('users')

    try:
        target = col.find_one({'_id': ObjectId(user_id)})
    except Exception:
        target = None
    if not target:
        return jsonify({'error': 'User not found'}), 404

    for f in ('email', 'name', 'role', 'status', 'password'):
        if f in data and data.get(f) is not None and not isinstance(data.get(f), str):
            return jsonify({'error': f'{f} must be text'}), 400
    # An admin demoting or deactivating themselves could lock everyone out of administration.
    if str(target['_id']) == user.get('user_id') and (
            data.get('role', 'admin') != 'admin' or data.get('status', 'active') != 'active'):
        return jsonify({'error': 'You cannot demote or deactivate your own account'}), 400

    # email uniqueness
    if 'email' in data:
        new_email = (data.get('email') or '').lower().strip()
        if not new_email:
            return jsonify({'error': 'Invalid email'}), 400
        exists = col.find_one({'email': new_email, '_id': {'$ne': target['_id']}})
        if exists:
            return jsonify({'error': 'Email already registered'}), 400
        updates['email'] = new_email

    if 'name' in data:
        if not (data.get('name') or '').strip():
            return jsonify({'error': 'Name is required'}), 400
        updates['name'] = data.get('name').strip()

    if 'role' in data:
        r = (data.get('role') or '').strip()
        if r not in ('patient', 'doctor', 'admin'):
            return jsonify({'error': 'Invalid role'}), 400
        updates['role'] = r

    if 'status' in data:
        s = (data.get('status') or '').strip()
        if s not in ('active', 'inactive'):
            return jsonify({'error': 'Invalid status'}), 400
        updates['status'] = s

    if 'password' in data and data.get('password'):
        pw = data.get('password')
        pw_hash = bcrypt.hashpw(pw.encode('utf-8'), bcrypt.gensalt())
        updates['password'] = pw_hash.decode('utf-8')

    if not updates:
        return jsonify({'error': 'No valid fields to update'}), 400

    updates['updated_at'] = datetime.utcnow()
    col.update_one({'_id': target['_id']}, {'$set': updates})
    updated = col.find_one({'_id': target['_id']})
    return jsonify({'user': _sanitize_user(updated)})


@admin_bp.route('/api/admin/users/<user_id>', methods=['DELETE'])
@admin_bp.route('/api/users/<user_id>', methods=['DELETE'])
@token_required
def delete_user(user_id):
    user = request.user or {}
    if not _require_admin(user):
        return jsonify({'error': 'Admin access required'}), 403

    uid = user.get('user_id')
    # prevent admin deleting self
    try:
        if str(uid) == str(user_id):
            return jsonify({'error': 'Cannot delete own admin account'}), 400
    except Exception:
        pass

    col = get_collection('users')
    try:
        res = col.delete_one({'_id': ObjectId(user_id)})
    except Exception:
        return jsonify({'error': 'User not found'}), 404
    if res.deleted_count == 0:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({'success': True})

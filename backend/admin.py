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
    if 'created_at' in u:
        u['createdAt'] = u['created_at'].isoformat() if hasattr(u['created_at'], 'isoformat') else u['created_at']
    elif 'createdAt' not in u:
        u['createdAt'] = ''
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

    # Authorization checks
    if role == 'admin':
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
        docs = list(col.find({'role': 'doctor', 'status': 'active'}).sort('created_at', -1))
        users = []
        for d in docs:
            u = _sanitize_user(d)
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
    name = (data.get('name') or '').strip()
    email = (data.get('email') or '').lower().strip()
    password = data.get('password')
    role = (data.get('role') or 'patient').strip()
    status = (data.get('status') or 'active').strip()

    if not name or not email or not password:
        return jsonify({'error': 'name, email and password are required'}), 400

    if role not in ('patient', 'doctor', 'admin'):
        return jsonify({'error': 'Invalid role'}), 400

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
        updates['name'] = data.get('name')

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

from flask import Blueprint, request, jsonify
from bson import ObjectId
from datetime import datetime

from db import get_collection
from auth import token_required

appointments_bp = Blueprint('appointments', __name__)


def _serialize(doc: dict):
    if not doc:
        return None
    doc = dict(doc)
    if '_id' in doc:
        doc['_id'] = str(doc['_id'])
    # ensure datetime is ISO string
    if 'datetime' in doc and isinstance(doc['datetime'], datetime):
        doc['datetime'] = doc['datetime'].isoformat()
    return doc


@appointments_bp.route('/api/appointments', methods=['POST'])
@token_required
def create_appointment():
    user = request.user or {}
    if user.get('role') != 'patient':
        return jsonify({'error': 'Only patients can create appointments'}), 403

    data = request.get_json(silent=True) or {}
    doctor_id = (data.get('doctor') or data.get('doctor_id') or '').strip()
    date = data.get('date')
    time = data.get('time')
    appt_type = data.get('type', 'Consultation')
    location = data.get('location', '')
    notes = data.get('notes', '')

    if not doctor_id:
        return jsonify({'error': 'doctor is required'}), 400
    # validate doctor_id corresponds to an existing doctor user
    users_col = get_collection('users')
    try:
        from bson import ObjectId as _OID
        doc_user = users_col.find_one({'_id': _OID(doctor_id)})
    except Exception:
        doc_user = None
    if not doc_user or doc_user.get('role') != 'doctor':
        return jsonify({'error': 'Invalid doctor_id'}), 400
    if not date or not time:
        return jsonify({'error': 'date and time are required'}), 400

    # parse datetime
    try:
        dt = datetime.strptime(f"{date} {time}", "%Y-%m-%d %H:%M")
    except Exception:
        return jsonify({'error': 'Invalid date or time format'}), 400

    if dt <= datetime.utcnow():
        return jsonify({'error': 'Appointment must be scheduled in the future'}), 400

    col = get_collection('appointments')
    # prevent double booking for same doctor / datetime (pending or approved)
    conflict = col.find_one({'doctor_id': doctor_id, 'datetime': dt, 'status': {'$in': ['pending', 'approved']}})
    if conflict:
        return jsonify({'error': 'Doctor is already booked at this time'}), 409

    appt = {
        'patient_id': user.get('user_id'),
        'doctor_id': doctor_id,
        'datetime': dt,
        'type': appt_type,
        'location': location,
        'notes': notes,
        'status': 'pending',
        'created_at': datetime.utcnow(),
        'updated_at': datetime.utcnow()
    }

    result = col.insert_one(appt)
    appt['_id'] = result.inserted_id
    return jsonify({'appointment': _serialize(appt)}), 201


@appointments_bp.route('/api/appointments', methods=['GET'])
@token_required
def list_appointments():
    user = request.user or {}
    role = user.get('role')
    uid = user.get('user_id')
    col = get_collection('appointments')

    query = {}
    if role == 'patient':
        query = {'patient_id': uid}
    elif role == 'doctor':
        query = {'doctor_id': uid}
    elif role == 'admin':
        query = {}
    else:
        return jsonify({'error': 'Unauthorized role'}), 403

    docs = list(col.find(query).sort('datetime', 1))
    serialized = [_serialize(d) for d in docs]
    return jsonify({'appointments': serialized})


@appointments_bp.route('/api/appointments/<appointment_id>', methods=['PUT'])
@token_required
def update_appointment(appointment_id):
    user = request.user or {}
    role = user.get('role')
    uid = user.get('user_id')
    data = request.get_json(silent=True) or {}

    col = get_collection('appointments')
    try:
        doc = col.find_one({'_id': ObjectId(appointment_id)})
    except Exception:
        return jsonify({'error': 'Appointment not found'}), 404
    if not doc:
        return jsonify({'error': 'Appointment not found'}), 404

    # Patient cancelling own appointment
    if role == 'patient' and (doc.get('patient_id') == uid):
        if data.get('action') == 'cancel' or data.get('status') == 'cancelled':
            col.update_one({'_id': doc['_id']}, {'$set': {'status': 'cancelled', 'updated_at': datetime.utcnow()}})
            updated = col.find_one({'_id': doc['_id']})
            return jsonify({'appointment': _serialize(updated)})
        else:
            return jsonify({'error': 'Patients can only cancel appointments'}), 403

    # Doctor can update status or fields for their appointments
    if role == 'doctor' and (doc.get('doctor_id') == uid):
        update_fields = {}
        if 'status' in data:
            update_fields['status'] = data.get('status')
        # allow some editable fields
        for f in ('type', 'location', 'notes'):
            if f in data:
                update_fields[f] = data.get(f)
        # allow datetime update if provided with date+time or full datetime
        if 'date' in data and 'time' in data:
            try:
                dt = datetime.strptime(f"{data.get('date')} {data.get('time')}", "%Y-%m-%d %H:%M")
                if dt <= datetime.utcnow():
                    return jsonify({'error': 'Appointment must be scheduled in the future'}), 400
                # prevent double booking
                conflict = col.find_one({'doctor_id': uid, 'datetime': dt, 'status': {'$in': ['pending','approved']}, '_id': {'$ne': doc['_id']}})
                if conflict:
                    return jsonify({'error': 'Doctor is already booked at this time'}), 409
                update_fields['datetime'] = dt
            except Exception:
                return jsonify({'error': 'Invalid date/time format'}), 400

        if not update_fields:
            return jsonify({'error': 'No valid fields to update'}), 400

        update_fields['updated_at'] = datetime.utcnow()
        col.update_one({'_id': doc['_id']}, {'$set': update_fields})
        updated = col.find_one({'_id': doc['_id']})
        return jsonify({'appointment': _serialize(updated)})

    # Admin: disallow changing appointment status (admins must not approve/reject)
    if role == 'admin':
        # If admin attempts to change status, forbid
        if 'status' in data or data.get('action') in ('approve', 'reject'):
            return jsonify({'error': 'Admin is not authorized to change appointment status'}), 403
        # Allow admins to update non-status fields if provided (type/location/notes/datetime)
        update_fields = {}
        for f in ('type', 'location', 'notes'):
            if f in data:
                update_fields[f] = data.get(f)
        if 'date' in data and 'time' in data:
            try:
                dt = datetime.strptime(f"{data.get('date')} {data.get('time')}", "%Y-%m-%d %H:%M")
                update_fields['datetime'] = dt
            except Exception:
                pass
        if not update_fields:
            return jsonify({'error': 'No valid fields to update'}), 400
        update_fields['updated_at'] = datetime.utcnow()
        col.update_one({'_id': doc['_id']}, {'$set': update_fields})
        updated = col.find_one({'_id': doc['_id']})
        return jsonify({'appointment': _serialize(updated)})

    return jsonify({'error': 'Unauthorized to modify this appointment'}), 403


@appointments_bp.route('/api/appointments/<appointment_id>', methods=['DELETE'])
@token_required
def delete_appointment(appointment_id):
    user = request.user or {}
    role = user.get('role')
    uid = user.get('user_id')
    col = get_collection('appointments')
    try:
        doc = col.find_one({'_id': ObjectId(appointment_id)})
    except Exception:
        return jsonify({'error': 'Appointment not found'}), 404
    if not doc:
        return jsonify({'error': 'Appointment not found'}), 404

    # Only patient owner may delete (cancel)
    if role == 'patient' and doc.get('patient_id') == uid:
        col.update_one({'_id': doc['_id']}, {'$set': {'status': 'cancelled', 'updated_at': datetime.utcnow()}})
        updated = col.find_one({'_id': doc['_id']})
        return jsonify({'appointment': _serialize(updated)})

    return jsonify({'error': 'Unauthorized to delete appointment'}), 403

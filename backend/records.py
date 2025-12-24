from flask import Blueprint, request, jsonify
from bson import ObjectId
from datetime import datetime

from db import get_collection
from auth import token_required

records_bp = Blueprint('records', __name__)


def _serialize(doc: dict):
    if not doc:
        return None
    doc = dict(doc)
    if '_id' in doc:
        doc['_id'] = str(doc['_id'])
    if 'created_at' in doc and isinstance(doc['created_at'], datetime):
        doc['created_at'] = doc['created_at'].isoformat()
    return doc


@records_bp.route('/api/records', methods=['POST'])
@token_required
def create_record():
    user = request.user or {}
    role = user.get('role')
    uid = user.get('user_id')

    # Only doctors may create medical records
    if role != 'doctor':
        return jsonify({'error': 'Only doctors can create medical records'}), 403

    data = request.get_json(silent=True) or {}
    patient_id = (data.get('patient_id') or '').strip()
    diagnosis = data.get('diagnosis')
    prescription = data.get('prescription')
    notes = data.get('notes') or ''

    if not patient_id:
        return jsonify({'error': 'patient_id is required'}), 400

    # Require at least diagnosis or prescription
    if not diagnosis and not prescription:
        return jsonify({'error': 'At least diagnosis or prescription is required'}), 400

    users = get_collection('users')
    try:
        doctor_doc = users.find_one({'_id': ObjectId(uid)})
    except Exception:
        doctor_doc = None
    doctor_name = doctor_doc.get('name') if doctor_doc else ''

    col = get_collection('medical_records')
    record = {
        'patient_id': patient_id,
        'doctor_id': uid,
        'doctor_name': doctor_name,
        'diagnosis': diagnosis,
        'prescription': prescription,
        'notes': notes,
        'created_at': datetime.utcnow()
    }

    result = col.insert_one(record)
    record['_id'] = result.inserted_id
    return jsonify({'record': _serialize(record)}), 201


@records_bp.route('/api/records/patient/<patient_id>', methods=['GET'])
@token_required
def get_records_for_patient(patient_id):
    user = request.user or {}
    role = user.get('role')
    uid = user.get('user_id')

    patient_id = (patient_id or '').strip()
    if not patient_id:
        return jsonify({'error': 'patient id required'}), 400

    # Patients can fetch only their own records
    if role == 'patient':
        if uid != patient_id:
            return jsonify({'error': 'Forbidden'}), 403

    # Doctors can fetch records of patients they have appointments with
    elif role == 'doctor':
        appt_col = get_collection('appointments')
        found = appt_col.find_one({'doctor_id': uid, 'patient_id': patient_id})
        if not found:
            return jsonify({'error': 'Forbidden'}), 403

    else:
        return jsonify({'error': 'Unauthorized role'}), 403

    col = get_collection('medical_records')
    docs = list(col.find({'patient_id': patient_id}).sort('created_at', -1))
    records = [_serialize(d) for d in docs]
    return jsonify({'records': records})

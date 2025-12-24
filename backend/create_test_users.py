"""
Run this script to insert sample doctor and admin users into the `users` collection.
It will not modify existing users with the same email.

Usage:
  cd backend
  python create_test_users.py

Credentials created (if not present):
- Doctor:  doctor.user@example.com / DoctorPass123 (role: doctor)
- Admin:   admin.user@example.com  / AdminPass123  (role: admin)

This script uses the same DB connection as `config.py`.
"""
from datetime import datetime
from db import get_collection
import bcrypt

users = get_collection('users')

samples = [
    {
        'name': 'Doctor User',
        'email': 'doctor.user@example.com',
        'password': 'DoctorPass123',
        'role': 'doctor'
    },
    {
        'name': 'Admin User',
        'email': 'admin.user@example.com',
        'password': 'AdminPass123',
        'role': 'admin'
    }
]

# Add a patient sample account for testing/demo purposes
samples.append({
    'name': 'Patient User',
    'email': 'patient.user@example.com',
    'password': 'PatientPass123',
    'role': 'patient'
})

for s in samples:
    email = s['email'].lower().strip()
    existing = users.find_one({'email': email})
    if existing:
        print(f"User already exists: {email}")
        continue
    pw_hash = bcrypt.hashpw(s['password'].encode('utf-8'), bcrypt.gensalt())
    doc = {
        'name': s['name'],
        'email': email,
        'password': pw_hash.decode('utf-8'),
        'role': s['role'],
        'created_at': datetime.utcnow()
    }
    res = users.insert_one(doc)
    print(f"Inserted {s['role']} user: {email} -> id {res.inserted_id}")

print('Done')

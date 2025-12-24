#!/usr/bin/env python3
"""
End-to-end smoke test for Health Record System.
Run: python backend/e2e_smoke_test.py
"""
import requests
import time
import os
import sys
import subprocess
import random
from datetime import datetime, timedelta

API = os.getenv('API_URL', 'http://localhost:5000')

# Try to import pymongo for direct DB checks
have_pymongo = True
try:
    from pymongo import MongoClient
except Exception:
    have_pymongo = False

# DB config (match backend/config.py)
MONGO_URI = 'mongodb://localhost:27017/'
DB_NAME = 'health_record_system'

# Test state
results = []
passes = 0
fails = 0
failed_details = []

# Variables that may be set during the test
appointment_id = None
created_user_id = None
record = None

# Helpers
def ok(msg):
    global passes
    passes += 1
    results.append((True, msg))

def fail(msg, file=None, scenario=None, expected=None, actual=None):
    global fails
    fails += 1
    results.append((False, msg))
    failed_details.append({'file': file or '', 'scenario': scenario or msg, 'expected': expected or '', 'actual': actual or ''})


def run_cmd(cmd):
    try:
        r = subprocess.run(cmd, shell=True, check=True, capture_output=True, text=True)
        return True, r.stdout
    except subprocess.CalledProcessError as e:
        return False, e.stderr

# Ensure test users exist (create_test_users.py)
success, out = run_cmd('python "backend/create_test_users.py"')
# Not a failure if it prints that users already exist

# Short sleep to allow DB writes
time.sleep(0.5)

# Phase 1: Authentication & Session
print('Phase 1: Authentication & Session')

# Register a unique patient
patient_email = f"smoketest.patient+{int(time.time())}@example.com"
patient_password = 'PatientPass123'
reg = requests.post(f"{API}/api/auth/register", json={"name": "Smoke Patient", "email": patient_email, "password": patient_password})
if reg.status_code in (200,201):
    ok('Patient registration endpoint responded')
else:
    fail('Patient registration failed', file='backend/auth.py', scenario='Register patient', expected='201/200', actual=f'{reg.status_code} {reg.text}')

# Login as Patient
login = requests.post(f"{API}/api/auth/login", json={"email": patient_email, "password": patient_password})
if login.status_code == 200 and login.json().get('token'):
    token_patient = login.json().get('token')
    user_patient = login.json().get('user')
    ok('Patient login succeeded and token returned')
else:
    fail('Patient login failed', file='backend/auth.py', scenario='Login patient', expected='200 + token', actual=f'{login.status_code} {login.text}')

# Verify /api/users/me
hdr = {'Authorization': f'Bearer {token_patient}'}
me = requests.get(f"{API}/api/users/me", headers=hdr)
if me.status_code == 200 and me.json().get('user'):
    ok('/api/users/me returns user for patient')
else:
    fail('/api/users/me failed for patient', file='backend/auth.py', scenario='GET /api/users/me', expected='200 + user', actual=f'{me.status_code} {me.text}')

# Simulate refresh: call me again
me2 = requests.get(f"{API}/api/users/me", headers=hdr)
if me2.status_code == 200:
    ok('Session persists across requests (simulated refresh)')
else:
    fail('Session did not persist on refresh', scenario='Refresh session', expected='200', actual=f'{me2.status_code} {me2.text}')

# Login as Doctor (test doctor created by create_test_users.py)
doc_email = 'doctor.user@example.com'
doc_password = 'DoctorPass123'
login_doc = requests.post(f"{API}/api/auth/login", json={"email": doc_email, "password": doc_password})
if login_doc.status_code == 200 and login_doc.json().get('token'):
    token_doc = login_doc.json().get('token')
    ok('Doctor login succeeded')
else:
    fail('Doctor login failed', file='backend/create_test_users.py', scenario='Login doctor', expected='200 + token', actual=f'{login_doc.status_code} {login_doc.text}')

# Verify doctor cannot access admin routes (list all users)
hdr_doc = {'Authorization': f'Bearer {token_doc}'}
users_list = requests.get(f"{API}/api/users", headers=hdr_doc)
if users_list.status_code in (200,403):
    # admins only, so expect 403
    if users_list.status_code == 403:
        ok('Doctor forbidden from admin users list (expected)')
    else:
        fail('Doctor unexpectedly allowed to access admin user list', file='backend/admin.py', scenario='Doctor admin access', expected='403', actual=f'{users_list.status_code}')
else:
    fail('Doctor access admin list check failed', scenario='Doctor admin access check', expected='403', actual=f'{users_list.status_code} {users_list.text}')

# Login as Admin
admin_email = 'admin.user@example.com'
admin_password = 'AdminPass123'
login_admin = requests.post(f"{API}/api/auth/login", json={"email": admin_email, "password": admin_password})
if login_admin.status_code == 200 and login_admin.json().get('token'):
    token_admin = login_admin.json().get('token')
    ok('Admin login succeeded')
else:
    fail('Admin login failed', file='backend/create_test_users.py', scenario='Login admin', expected='200 + token', actual=f'{login_admin.status_code} {login_admin.text}')

# Verify admin cannot perform doctor/patient medical actions: attempt to POST /api/records
hdr_admin = {'Authorization': f'Bearer {token_admin}'}
rec_try = requests.post(f"{API}/api/records", headers=hdr_admin, json={"patient_id": "dummy", "diagnosis": "x"})
if rec_try.status_code == 403:
    ok('Admin cannot create medical records (expected)')
else:
    # Code might allow admin; record result
    fail('Admin creating medical records should be forbidden', file='backend/records.py', scenario='Admin create record', expected='403', actual=f'{rec_try.status_code} {rec_try.text}')

# Phase 2: Patient Flow (Data Creation)
print('\nPhase 2: Patient Flow')

# Patient fetches doctors list
docs = requests.get(f"{API}/api/users?role=doctor", headers=hdr)
if docs.status_code == 200 and isinstance(docs.json().get('users'), list):
    doctors = docs.json().get('users')
    # If no doctors found, attempt to run create_test_users and retry a few times
    if not doctors:
        retried = False
        for attempt in range(3):
            run_cmd('python "backend/create_test_users.py"')
            time.sleep(0.5)
            docs = requests.get(f"{API}/api/users?role=doctor", headers=hdr)
            if docs.status_code == 200 and docs.json().get('users'):
                doctors = docs.json().get('users')
                retried = True
                break
        if not doctors:
            fail('No doctors returned for patient when expecting at least one', file='backend/admin.py', scenario='List doctors', expected='>=1 doctor', actual='0 returned')
        else:
            ok('Doctors list loads for patient after creating test users')
    else:
        ok('Doctors list loads for patient')
else:
    fail('Patient could not load doctors list', file='backend/admin.py', scenario='List doctors', expected='200 + users', actual=f'{docs.status_code} {docs.text}')

# Select doctor: prefer the known test doctor email, otherwise pick first and update login email to match
selected_doctor = None
for d in doctors:
    if d.get('email') == doc_email:
        selected_doctor = d
        break
if not selected_doctor:
    selected_doctor = doctors[0]
    # ensure we login as the selected doctor
    doc_email = selected_doctor.get('email')
selected_doctor_id = selected_doctor.get('_id') or selected_doctor.get('id')
if not selected_doctor_id:
    fail('Doctor id not present in list (should use id, not name)', file='src/pages/appointments/BookAppointment.jsx', scenario='Doctor selection uses id', expected='doctor id present', actual=str(selected_doctor))
else:
    ok('Doctor selection provides id (used for booking)')

# Validate form logic: attempt to create appointment without doctor_id -> expect 400
bad_appt = requests.post(f"{API}/api/appointments", headers=hdr, json={"date": "2099-01-01", "time": "10:00"})
if bad_appt.status_code == 400:
    ok('Appointment without doctor_id rejected (validation works)')
else:
    fail('Appointment without doctor_id not rejected', file='backend/appointments.py', scenario='Validation doctor required', expected='400', actual=f'{bad_appt.status_code} {bad_appt.text}')

# Create a valid appointment in the future (unique, avoids double-book collisions)
rand_days = 30 + random.randint(0, 30)
rand_hour = random.randint(8, 16)
rand_min = random.choice([0, 15, 30, 45])
dt_obj = datetime.utcnow() + timedelta(days=rand_days, hours=rand_hour - datetime.utcnow().hour)
dt_obj = dt_obj.replace(minute=rand_min, second=0, microsecond=0)
date_str = dt_obj.strftime('%Y-%m-%d')
time_str = dt_obj.strftime('%H:%M')
appt_payload = {"doctor": selected_doctor_id, "date": date_str, "time": time_str, "type": "Consultation", "notes": "Smoke test"}
create_appt = requests.post(f"{API}/api/appointments", headers=hdr, json=appt_payload)
if create_appt.status_code == 201 and create_appt.json().get('appointment'):
    appointment = create_appt.json().get('appointment')
    appointment_id = appointment.get('_id')
    # verify patient_id and doctor_id
    if appointment.get('patient_id') == user_patient.get('id') or appointment.get('patient_id') == user_patient.get('_id'):
        ok('Appointment created with correct patient_id')
    else:
        fail('Appointment patient_id mismatch', file='backend/appointments.py', scenario='Appointment patient_id', expected=user_patient, actual=appointment)
    if appointment.get('doctor_id') == selected_doctor_id:
        ok('Appointment created with correct doctor_id')
    else:
        fail('Appointment doctor_id mismatch', file='backend/appointments.py', scenario='Appointment doctor_id', expected=selected_doctor_id, actual=appointment.get('doctor_id'))
    if appointment.get('status') == 'pending':
        ok('Appointment status is pending on creation')
    else:
        fail('Appointment status not pending at creation', file='backend/appointments.py', scenario='Appointment status', expected='pending', actual=appointment.get('status'))
else:
    fail('Failed to create appointment', file='backend/appointments.py', scenario='Create appointment', expected='201 + appointment', actual=f'{create_appt.status_code} {create_appt.text}')

# Patient views their appointments
list_appts = requests.get(f"{API}/api/appointments", headers=hdr)
if list_appts.status_code == 200 and any(a.get('_id') == appointment_id for a in list_appts.json().get('appointments', [])):
    ok('Patient sees their created appointment')
else:
    fail('Patient appointment not visible in list', file='backend/appointments.py', scenario='List patient appointments', expected='Appointment visible', actual=f'{list_appts.status_code} {list_appts.text}')

# Phase 3: Doctor Flow (Ownership & Isolation)
print('\nPhase 3: Doctor Flow')

# Login as the selected doctor (may need to use doctor id email; we have doctor.user@example.com)
# Use the known doctor account; ensure this doctor corresponds to selected_doctor
login_doc2 = requests.post(f"{API}/api/auth/login", json={"email": doc_email, "password": doc_password})
if login_doc2.status_code == 200:
    token_selected_doc = login_doc2.json().get('token')
    hdr_selected_doc = {'Authorization': f'Bearer {token_selected_doc}'}
    # Doctor list appointments
    doc_appts = requests.get(f"{API}/api/appointments", headers=hdr_selected_doc)
    if doc_appts.status_code == 200 and any(a.get('_id') == appointment_id for a in doc_appts.json().get('appointments', [])):
        ok('Selected doctor sees the appointment in their dashboard')
    else:
        fail('Selected doctor does not see the appointment', file='backend/appointments.py', scenario='Doctor view appointments', expected='appointment present', actual=doc_appts.text)
else:
    fail('Unable to login selected doctor for dashboard check', scenario='Doctor login for dashboard', actual=f'{login_doc2.status_code} {login_doc2.text}')

# Create a DIFFERENT doctor via admin to validate isolation
new_doc_payload = {"name": "Other Doctor", "email": "other.doctor.smoke@example.com", "password": "OtherDoc123", "role": "doctor"}
create_other = requests.post(f"{API}/api/admin/users", headers=hdr_admin, json=new_doc_payload)
if create_other.status_code == 201 and create_other.json().get('user'):
    other_doc = create_other.json().get('user')
    other_doc_email = other_doc.get('email')
    ok('Admin created a second doctor for isolation test')
elif create_other.status_code == 400 and 'Email already registered' in (create_other.text or ''):
    other_doc_email = new_doc_payload['email']
    ok('Other doctor already exists (reused)')
else:
    fail('Admin could not create a second doctor', file='backend/admin.py', scenario='Admin create doctor', expected='201', actual=f'{create_other.status_code} {create_other.text}')

# Login as different doctor
login_other_doc = requests.post(f"{API}/api/auth/login", json={"email": new_doc_payload['email'], "password": new_doc_payload['password']})
if login_other_doc.status_code == 200:
    token_other = login_other_doc.json().get('token')
    hdr_other_doc = {'Authorization': f'Bearer {token_other}'}
    other_appts = requests.get(f"{API}/api/appointments", headers=hdr_other_doc)
    if other_appts.status_code == 200 and not any(a.get('_id') == appointment_id for a in other_appts.json().get('appointments', [])):
        ok('Different doctor does NOT see the appointment (no leakage)')
    else:
        fail('Different doctor sees appointment (ownership breach)', file='backend/appointments.py', scenario='Doctor isolation', expected='no appointment visible', actual=other_appts.text)
else:
    fail('Could not login created other doctor', scenario='Login other doctor', actual=f'{login_other_doc.status_code} {login_other_doc.text}')

# Selected doctor approves appointment
update = requests.put(f"{API}/api/appointments/{appointment_id}", headers=hdr_selected_doc, json={"status": "approved"})
if update.status_code == 200 and update.json().get('appointment', {}).get('status') == 'approved':
    ok('Selected doctor approved appointment and status updated')
else:
    fail('Doctor failed to approve appointment', file='backend/appointments.py', scenario='Doctor approve', expected='200 + approved', actual=f'{update.status_code} {update.text}')

# Phase 4: Medical Records (Immutable Flow)
print('\nPhase 4: Medical Records')

# Doctor opens patient medical record list
# Need patient id string
patient_id = user_patient.get('id') or user_patient.get('_id')
rec_list_by_doc = requests.get(f"{API}/api/records/patient/{patient_id}", headers=hdr_selected_doc)
if rec_list_by_doc.status_code in (200,403):
    if rec_list_by_doc.status_code == 200:
        ok('Doctor can load patient records (if they have appt)')
    else:
        fail('Doctor forbidden from loading patient records', file='backend/records.py', scenario='Doctor get patient records', expected='200', actual=f'{rec_list_by_doc.status_code} {rec_list_by_doc.text}')
else:
    fail('Doctor get records endpoint failed', scenario='Doctor get records', actual=f'{rec_list_by_doc.status_code} {rec_list_by_doc.text}')

# Doctor adds diagnosis/prescription
rec_payload = {"patient_id": patient_id, "diagnosis": "Common Cold", "prescription": "Rest and fluids"}
create_rec = requests.post(f"{API}/api/records", headers=hdr_selected_doc, json=rec_payload)
if create_rec.status_code == 201 and create_rec.json().get('record'):
    record = create_rec.json().get('record')
    ok('Doctor created medical record')
    # verify fields
    if record.get('patient_id') == patient_id and record.get('doctor_id'):
        ok('Medical record contains patient_id and doctor_id')
    else:
        fail('Medical record missing ownership fields', file='backend/records.py', scenario='Record fields', expected='patient_id & doctor_id', actual=str(record))
    if record.get('created_at'):
        ok('Medical record contains created_at timestamp')
    else:
        fail('Medical record missing created_at', file='backend/records.py', scenario='Record timestamp', expected='created_at', actual=str(record))
else:
    fail('Doctor failed to create medical record', file='backend/records.py', scenario='Create record', expected='201', actual=f'{create_rec.status_code} {create_rec.text}')

# Verify immutability: expect no PUT or DELETE endpoints for records
# Try PUT/DELETE and expect not allowed / 405 or 404
put_rec = requests.put(f"{API}/api/records/{record.get('_id')}", headers=hdr_selected_doc, json={"diagnosis": "changed"})
delete_rec = requests.delete(f"{API}/api/records/{record.get('_id')}", headers=hdr_selected_doc)
if put_rec.status_code in (404,405):
    ok('No edit endpoint for records (PUT returned 404/405)')
else:
    fail('PUT to records exists (immutability violated)', file='backend/records.py', scenario='Records immutability PUT', expected='404/405', actual=f'{put_rec.status_code} {put_rec.text}')

if delete_rec.status_code in (404,405):
    ok('No delete endpoint for records (DELETE returned 404/405)')
else:
    fail('DELETE to records exists (immutability violated)', file='backend/records.py', scenario='Records immutability DELETE', expected='404/405', actual=f'{delete_rec.status_code} {delete_rec.text}')

# Phase 5: Patient Read-Only Verification
print('\nPhase 5: Patient Read-Only Verification')

pat_records = requests.get(f"{API}/api/records/patient/{patient_id}", headers=hdr)
if pat_records.status_code == 200 and any(r.get('_id') == record.get('_id') for r in pat_records.json().get('records', [])):
    ok('Patient can view medical records and sees doctor input')
else:
    fail('Patient cannot view records or data mismatch', file='backend/records.py', scenario='Patient view records', expected='200 + record present', actual=f'{pat_records.status_code} {pat_records.text}')

# Patient attempts to create record -> should be forbidden
pat_try_create = requests.post(f"{API}/api/records", headers=hdr, json={"patient_id": patient_id, "diagnosis": "x"})
if pat_try_create.status_code == 403:
    ok('Patient cannot create medical records (read-only)')
else:
    fail('Patient allowed to create medical records', file='backend/records.py', scenario='Patient create record', expected='403', actual=f'{pat_try_create.status_code} {pat_try_create.text}')

# Phase 6: Admin Flow
print('\nPhase 6: Admin Flow')

# Admin opens User Management
list_users_admin = requests.get(f"{API}/api/admin/users", headers=hdr_admin)
if list_users_admin.status_code == 200 and isinstance(list_users_admin.json().get('users'), list):
    ok('Admin user list loads from DB')
else:
    fail('Admin users list failed', file='backend/admin.py', scenario='Admin list users', expected='200 + users', actual=f'{list_users_admin.status_code} {list_users_admin.text}')

# Admin create user
new_user = {"name": "Smoke Patient 2", "email": "smoke.patient2@example.com", "password": "P2pass123", "role": "patient"}
create_user_admin = requests.post(f"{API}/api/admin/users", headers=hdr_admin, json=new_user)
created_user_id = None
if create_user_admin.status_code == 201 and create_user_admin.json().get('user'):
    created_user = create_user_admin.json().get('user')
    ok('Admin created user successfully')
    created_user_id = created_user.get('id') or created_user.get('_id')
elif create_user_admin.status_code == 400 and 'Email already registered' in (create_user_admin.text or ''):
    # try to find existing user id from admin list
    users_resp = requests.get(f"{API}/api/admin/users", headers=hdr_admin)
    found = None
    if users_resp.status_code == 200:
        for u in users_resp.json().get('users', []):
            if u.get('email') == new_user['email']:
                found = u
                break
    if found:
        created_user_id = found.get('id') or found.get('_id')
        ok('Admin user already existed; reusing existing user')
    else:
        fail('Admin failed to create user and existing user not found', file='backend/admin.py', scenario='Admin create user lookup', expected='201 or existing user', actual=f'{create_user_admin.status_code} {create_user_admin.text}')
else:
    fail('Admin failed to create user', file='backend/admin.py', scenario='Admin create user', expected='201', actual=f'{create_user_admin.status_code} {create_user_admin.text}')

# Admin deactivates user (update status)
if created_user_id:
    upd = requests.put(f"{API}/api/admin/users/{created_user_id}", headers=hdr_admin, json={"status": "inactive"})
    if upd.status_code == 200 and upd.json().get('user', {}).get('status') == 'inactive':
        ok('Admin deactivated user successfully')
    else:
        fail('Admin failed to deactivate user', file='backend/admin.py', scenario='Admin deactivate user', expected='200 + inactive', actual=f'{upd.status_code} {upd.text}')

# Admin restrictions: admin cannot add medical records (we already tested above)

# Additionally, check whether admin can approve appointments (expected: not allowed per spec)
admin_update_appt = requests.put(f"{API}/api/appointments/{appointment_id}", headers=hdr_admin, json={"status": "approved"})
if admin_update_appt.status_code == 200:
    # This is an issue: admin can approve (code allows admin updates)
    fail('Admin was able to approve appointment but spec expected no approval by admin', file='backend/appointments.py', scenario='Admin approve appointment', expected='403', actual=f'200 {admin_update_appt.text}')
else:
    ok('Admin cannot approve appointment (expected)')

# Phase 7: Data Source & Storage Check
print('\nPhase 7: Data Source & Storage Check')

# Check localStorage usage by scanning frontend source (we will not run browser here). We consider presence of localStorage for token acceptable, but not for appointments/records/users.
# We cannot inspect browser localStorage directly in this test environment.
# Pass if code uses 'healthRecordToken' only and not storing data collections.
# Quick check: search for 'healthRecordToken' across src

def search_src(keyword):
    matches = []
    for root, dirs, files in os.walk('src'):
        for f in files:
            if f.endswith(('.js', '.jsx')):
                path = os.path.join(root, f)
                try:
                    with open(path, 'r', encoding='utf-8') as fh:
                        txt = fh.read()
                        if keyword in txt:
                            matches.append(path)
                except Exception:
                    pass
    return matches

ls_tok = search_src('healthRecordToken')
if ls_tok:
    ok('Frontend uses localStorage for JWT token')
else:
    fail('Frontend does not use healthRecordToken in localStorage', scenario='localStorage token usage')

# Ensure no other data stored in localStorage by searching for 'localStorage.setItem' with keys other than healthRecordUser
ls_set_items = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.js', '.jsx')):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8') as fh:
                    for i, line in enumerate(fh.readlines()):
                        if 'localStorage.setItem' in line and 'healthRecord' not in line:
                            ls_set_items.append((path, i+1, line.strip()))
            except Exception:
                pass

if not ls_set_items:
    ok('No localStorage misuse detected (no data collections stored)')
else:
    fail('localStorage seems to store other keys (possible misuse)', scenario='localStorage misuse', actual=str(ls_set_items))

# Refresh behavior: call endpoints again and verify data reload from backend
r1 = requests.get(f"{API}/api/appointments", headers=hdr)
r2 = requests.get(f"{API}/api/appointments", headers=hdr_selected_doc)
if r1.status_code == 200 and r2.status_code == 200:
    ok('Data reloads from backend on repeated requests (simulating refresh)')
else:
    fail('Data refresh failed', scenario='Refresh behavior', actual=f'{r1.status_code} {r2.status_code}')

# Phase 8: Negative & Edge Cases
print('\nPhase 8: Negative & Edge Cases')

# Unauthorized access: patient tries doctor route -> call doctor-only endpoint like GET /api/appointments as doctor? The list_appointments uses role to filter; patient calling doctor route should get only patient appts; explicit block: try to use doctor-only action like updating status
patient_try_update = requests.put(f"{API}/api/appointments/{appointment_id}", headers=hdr, json={"status": "approved"})
if patient_try_update.status_code in (403, 400):
    ok('Patient blocked from doctor-only update actions')
else:
    fail('Patient was able to perform doctor action', file='backend/appointments.py', scenario='Unauthorized patient update', expected='403', actual=f'{patient_try_update.status_code} {patient_try_update.text}')

# Doctor tries admin route -> doctor GET /api/admin/users
doc_admin_try = requests.get(f"{API}/api/admin/users", headers=hdr_doc)
if doc_admin_try.status_code in (403,401):
    ok('Doctor blocked from admin routes')
else:
    fail('Doctor allowed admin route', file='backend/admin.py', scenario='Doctor admin access', expected='403', actual=f'{doc_admin_try.status_code} {doc_admin_try.text}')

# Invalid operations: appointment without doctor_id already tested above
# Medical record without auth
rec_no_auth = requests.post(f"{API}/api/records", json={"patient_id": patient_id, "diagnosis": "x"})
if rec_no_auth.status_code == 401:
    ok('Creating medical record without auth rejected')
else:
    fail('Record creation without auth did not return 401', scenario='Unauthenticated record create', expected='401', actual=f'{rec_no_auth.status_code} {rec_no_auth.text}')

# Final: DB consistency checks via pymongo if available
mongo_issue = False
if have_pymongo:
    try:
        client = MongoClient(MONGO_URI)
        db = client[DB_NAME]
        appt_doc = db['appointments'].find_one({'_id': __import__('bson').ObjectId(appointment_id)})
        if appt_doc:
            ok('Appointment document present in MongoDB')
            # verify status
            if appt_doc.get('status') == 'approved':
                ok('MongoDB shows appointment status updated to approved')
            else:
                fail('MongoDB appointment status mismatch', file='backend/appointments.py', scenario='DB appointment status', expected='approved', actual=str(appt_doc.get('status')))
        else:
            fail('Appointment document not found in MongoDB', scenario='DB appointment existence')
        rec_doc = db['medical_records'].find_one({'_id': __import__('bson').ObjectId(record.get('_id'))})
        if rec_doc:
            ok('Medical record present in MongoDB')
        else:
            fail('Medical record not found in MongoDB')
    except Exception as e:
        mongo_issue = True
        fail('Unable to connect/query MongoDB via pymongo', scenario='MongoDB direct check', actual=str(e))
else:
    # cannot perform direct DB checks
    fail('pymongo not available in environment; direct MongoDB checks skipped', scenario='MongoDB direct checks', actual='pymongo missing')

# Summarize and output Final Report in requested format
total = passes + fails
print('\n\nFINAL REPORT')
print('1. PASS SUMMARY')
print(f"   - Total tests run: {total}")
print(f"   - Tests passed: {passes}")
print(f"   - Tests failed: {fails}")

# Data flow verification: appointment lifecycle, medical record lifecycle, user lifecycle
appt_ok = 'OK' if any(r[1]== 'Appointment created with correct doctor_id' for r in results) and not any(fd['scenario']=='Admin approve appointment' for fd in failed_details) else 'ISSUE'
rec_ok = 'OK' if any(r[1]== 'Medical record contains patient_id and doctor_id' for r in results) else 'ISSUE'
user_ok = 'OK' if any(r[1]=='Admin user list loads from DB' for r in results) else 'ISSUE'

print('\n2. DATA FLOW VERIFICATION')
print(f"   - Appointment lifecycle ({appt_ok})")
print(f"   - Medical record lifecycle ({rec_ok})")
print(f"   - User lifecycle ({user_ok})")

# Ownership & Isolation
doc_iso = 'OK' if any(r[1]=='Selected doctor sees the appointment in their dashboard' for r in results) and any(r[1]=='Different doctor does NOT see the appointment (no leakage)' for r in results) else 'ISSUE'
pat_iso = 'OK' if any(r[1]=='Patient sees their created appointment' for r in results) else 'ISSUE'
print('\n3. OWNERSHIP & ISOLATION')
print(f"   - Doctor isolation ({doc_iso})")
print(f"   - Patient isolation ({pat_iso})")

# Storage & DB Consistency
mongo_cons = 'OK' if not mongo_issue and have_pymongo else 'ISSUE'
local_misuse = 'YES' if ls_set_items else 'NO'
print('\n4. STORAGE & DB CONSISTENCY')
print(f"   - MongoDB consistency ({mongo_cons})")
print(f"   - localStorage misuse ({local_misuse})")

print('\n5. ERRORS FOUND (IF ANY)')
if failed_details:
    for fd in failed_details:
        print('   - file')
        print(f"     - {fd.get('file')}")
        print('     - scenario')
        print(f"       - {fd.get('scenario')}")
        print('     - expected vs actual')
        print(f"       - expected: {fd.get('expected')}\n         actual: {fd.get('actual')}")
else:
    print('   - None')

print('\n6. FINAL VERDICT')
if fails == 0:
    print('   - SYSTEM STATUS: ✅ PRODUCTION-READY')
    print('\nNO FUNCTIONAL BUGS FOUND. SYSTEM IS COMPLETE.')
else:
    print('   - SYSTEM STATUS: ❌ ISSUES FOUND')
    print('   - If issues found → list them clearly (see Errors Found)')

# Exit code non-zero if failures
sys.exit(1 if fails else 0)

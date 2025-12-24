import requests
API='http://localhost:5000'
# login admin
r = requests.post(f"{API}/api/auth/login", json={"email":"admin.user@example.com","password":"AdminPass123"})
print('admin login', r.status_code, r.text)
adm_token = r.json().get('token') if r.ok else None
r2 = requests.get(f"{API}/api/users?role=doctor", headers={'Authorization':f'Bearer {adm_token}'})
print('/api/users?role=doctor as admin', r2.status_code, r2.text)
# login doctor
r3 = requests.post(f"{API}/api/auth/login", json={"email":"doctor.user@example.com","password":"DoctorPass123"})
print('doctor login', r3.status_code, r3.text)
doc_token = r3.json().get('token') if r3.ok else None
r4 = requests.get(f"{API}/api/users?role=doctor", headers={'Authorization':f'Bearer {doc_token}'})
print('/api/users?role=doctor as doctor', r4.status_code, r4.text)
# anonymous
r5 = requests.get(f"{API}/api/users?role=doctor")
print('/api/users?role=doctor as anonymous', r5.status_code, r5.text)

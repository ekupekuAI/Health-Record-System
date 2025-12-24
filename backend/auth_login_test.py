import json, urllib.request

creds = [
    ('doctor.user@example.com','DoctorPass123'),
    ('admin.user@example.com','AdminPass123')
]

for email, pw in creds:
    data = json.dumps({'email': email, 'password': pw}).encode('utf-8')
    req = urllib.request.Request('http://localhost:5000/api/auth/login', data=data, headers={'Content-Type': 'application/json'})
    try:
        resp = urllib.request.urlopen(req, timeout=5)
        out = resp.read().decode('utf-8')
        print(email, '->', out)
    except Exception as e:
        print(email, 'login failed:', e)

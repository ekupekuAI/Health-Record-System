import json
import sys
import urllib.request

BASE = 'http://localhost:5000'

def do_post(path, payload):
    url = BASE + path
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    try:
        resp = urllib.request.urlopen(req, timeout=5)
        out = resp.read().decode('utf-8')
        print(path, '->', out)
        print('STATUS:', resp.getcode())
        return json.loads(out) if out else None
    except Exception as e:
        print('POST', path, 'failed:', e)
        sys.exit(1)

def do_get(path, token=None):
    url = BASE + path
    headers = {'Content-Type': 'application/json'}
    if token:
        headers['Authorization'] = 'Bearer ' + token
    req = urllib.request.Request(url, headers=headers)
    try:
        resp = urllib.request.urlopen(req, timeout=5)
        out = resp.read().decode('utf-8')
        print(path, '->', out)
        print('STATUS:', resp.getcode())
        return json.loads(out) if out else None
    except Exception as e:
        print('GET', path, 'failed:', e)
        sys.exit(1)

if __name__ == '__main__':
    print('Registering user...')
    register_resp = do_post('/api/auth/register', {'name': 'Test User', 'email': 'test.user@example.com', 'password': 'TestPass123', 'role': 'patient'})

    print('\nLogging in...')
    login_resp = do_post('/api/auth/login', {'email': 'test.user@example.com', 'password': 'TestPass123'})
    if not login_resp or 'token' not in login_resp:
        print('Login failed or token missing')
        sys.exit(1)

    token = login_resp['token']
    print('\nCalling /api/users/me')
    me = do_get('/api/users/me', token=token)
    print('\nDone')

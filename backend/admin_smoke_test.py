import json
import urllib.request
import urllib.error
import uuid

BASE = 'http://localhost:5000'

def post(path, payload, token=None):
    data = json.dumps(payload).encode('utf-8')
    headers = {'Content-Type': 'application/json'}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    req = urllib.request.Request(BASE + path, data=data, headers=headers)
    try:
        resp = urllib.request.urlopen(req, timeout=10)
        return resp.getcode(), json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode('utf-8'))
        except Exception:
            return e.code, {'error': str(e)}
    except Exception as e:
        return None, {'error': str(e)}

def get(path, token=None):
    headers = {}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    req = urllib.request.Request(BASE + path, headers=headers)
    try:
        resp = urllib.request.urlopen(req, timeout=10)
        return resp.getcode(), json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode('utf-8'))
        except Exception:
            return e.code, {'error': str(e)}
    except Exception as e:
        return None, {'error': str(e)}

def delete(path, token=None):
    headers = {}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    req = urllib.request.Request(BASE + path, headers=headers, method='DELETE')
    try:
        resp = urllib.request.urlopen(req, timeout=10)
        return resp.getcode(), json.loads(resp.read().decode('utf-8')) if resp.readable() else (resp.getcode(), {})
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode('utf-8'))
        except Exception:
            return e.code, {'error': str(e)}
    except Exception as e:
        return None, {'error': str(e)}


def main():
    # login as admin
    code, body = post('/api/auth/login', {'email': 'admin.user@example.com', 'password': 'AdminPass123'})
    print('LOGIN', code, body)
    if code != 200:
        print('Admin login failed, aborting smoke test')
        return
    token = body.get('token')

    # list users
    code, body = get('/api/users', token)
    print('LIST USERS', code, body if isinstance(body, dict) else '...')

    # create user
    rnd = uuid.uuid4().hex[:6]
    email = f'testuser_{rnd}@example.com'
    payload = {'name': 'Smoke Test', 'email': email, 'password': 'TestPass123', 'role': 'patient'}
    code, body = post('/api/users', payload, token)
    print('CREATE USER', code, body)
    if code != 201:
        print('Create failed, aborting')
        return
    uid = body.get('user', {}).get('_id') or body.get('user', {}).get('id')

    # update user
    code, body = post(f'/api/users/{uid}', {'name': 'Updated Smoke'}, token)
    # above POST may not be allowed; use PUT
    if code is None or code >= 400:
        import urllib.request as r
        import json as j
        req = urllib.request.Request(BASE + f'/api/users/{uid}', data=json.dumps({'name': 'Updated Smoke'}).encode('utf-8'), headers={'Content-Type':'application/json','Authorization':f'Bearer {token}'}, method='PUT')
        try:
            resp = urllib.request.urlopen(req, timeout=10)
            code = resp.getcode(); body = json.loads(resp.read().decode('utf-8'))
        except urllib.error.HTTPError as e:
            try:
                code = e.code; body = json.loads(e.read().decode('utf-8'))
            except Exception:
                code = e.code; body = {'error': str(e)}
    print('UPDATE USER', code, body)

    # delete user
    code, body = delete(f'/api/users/{uid}', token)
    print('DELETE USER', code, body)


if __name__ == '__main__':
    main()

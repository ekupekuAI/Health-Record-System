from flask import Flask, jsonify, request
from flask_cors import CORS

import config

app = Flask(__name__)
CORS(app, resources={r'/api/*': {'origins': config.CORS_ORIGINS}})

# Register auth blueprint
from auth import auth_bp
app.register_blueprint(auth_bp)

# Register appointments blueprint
from appointments import appointments_bp
app.register_blueprint(appointments_bp)

# Register medical records blueprint
from records import records_bp
app.register_blueprint(records_bp)

# Register admin blueprint
from admin import admin_bp
app.register_blueprint(admin_bp)


@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({"status": "Backend running"})


@app.after_request
def no_store(resp):
    # Responses contain health data: don't let browsers or proxies cache them.
    resp.headers['Cache-Control'] = 'no-store'
    resp.headers['X-Content-Type-Options'] = 'nosniff'
    return resp


if config.USE_IN_MEMORY_DB:
    # In-memory dev database starts empty: seed the demo accounts.
    import create_test_users  # noqa: F401


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=config.PORT)

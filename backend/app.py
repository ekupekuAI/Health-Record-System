from flask import Flask, jsonify, request
from flask_cors import CORS

import db as db_module

app = Flask(__name__)
CORS(app)

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


@app.route('/api/db-test', methods=['POST'])
def db_test_post():
    """Insert a test document into the `test` collection and return inserted ID."""
    collection = db_module.get_collection('test')
    payload = request.get_json(silent=True) or {"message": "test document"}
    result = collection.insert_one(payload)
    return jsonify({"inserted_id": str(result.inserted_id)}), 201


@app.route('/api/db-test', methods=['GET'])
def db_test_get():
    """Fetch all documents from the `test` collection and return as JSON."""
    collection = db_module.get_collection('test')
    docs = list(collection.find({}))
    # Convert ObjectId to string for JSON serialization
    for d in docs:
        d['_id'] = str(d.get('_id'))
    return jsonify(docs)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

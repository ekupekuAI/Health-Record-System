import os
import secrets
from datetime import timedelta

from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

# MongoDB configuration (override with environment variables / backend/.env)
# Set MONGO_URI=mongomock:// to run with an in-memory database (no MongoDB install needed;
# data is lost on restart and demo users are seeded automatically).
MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017/')
DB_NAME = os.getenv('DB_NAME', 'health_record_system')
USE_IN_MEMORY_DB = MONGO_URI.startswith('mongomock://')

# Create client and export `db` for application use
# This is a lightweight connection; the MongoClient manages pooling.
if USE_IN_MEMORY_DB:
    import mongomock
    client = mongomock.MongoClient()
else:
    from pymongo import MongoClient
    client = MongoClient(MONGO_URI)
db = client[DB_NAME]

# JWT / Auth configuration
# Never fall back to a shared, publicly known secret: anyone could forge admin tokens.
JWT_SECRET = os.getenv('JWT_SECRET')
if not JWT_SECRET:
    JWT_SECRET = secrets.token_urlsafe(48)
    print('WARNING: JWT_SECRET is not set; using a random secret for this run (sessions reset on restart).')
JWT_ALGORITHM = 'HS256'
# token lifetime
JWT_EXP_DELTA = timedelta(hours=int(os.getenv('JWT_EXP_HOURS', '1')))

# Browser origins allowed to call the API directly (comma separated).
CORS_ORIGINS = [o.strip() for o in os.getenv('CORS_ORIGINS', 'http://localhost:3000').split(',') if o.strip()]
PORT = int(os.getenv('PORT', '5000'))

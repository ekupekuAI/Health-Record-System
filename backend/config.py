from pymongo import MongoClient

# MongoDB configuration
MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "health_record_system"

# Create client and export `db` for application use
# This is a lightweight connection; the MongoClient manages pooling.
client = MongoClient(MONGO_URI)
db = client[DB_NAME]

import os
from datetime import timedelta

# `db` is the PyMongo Database instance exported for import by the app

# JWT / Auth configuration
# Use environment variable `JWT_SECRET` when available; fall back to a dev secret.
JWT_SECRET = os.getenv('JWT_SECRET', 'change-me-in-prod')
JWT_ALGORITHM = 'HS256'
# token lifetime
JWT_EXP_DELTA = timedelta(hours=int(os.getenv('JWT_EXP_HOURS', '1')))

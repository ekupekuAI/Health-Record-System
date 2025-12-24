from config import db

def get_collection(name: str):
    """Return a collection object by name."""
    return db[name]

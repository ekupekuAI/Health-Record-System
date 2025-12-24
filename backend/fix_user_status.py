from pymongo import MongoClient
c = MongoClient('mongodb://localhost:27017/')
db = c['health_record_system']
users = db['users']
res = users.update_many({'status': {'$exists': False}}, {'$set': {'status': 'active'}})
print(f'Updated {res.modified_count} user(s) to set status=active')
for u in users.find({'status':'active'}):
    print(u.get('email'), u.get('status'))

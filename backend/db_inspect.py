from pymongo import MongoClient
c=MongoClient('mongodb://localhost:27017/')
db=c['health_record_system']
print('doctor count:', db.users.count_documents({'role':'doctor'}))
for d in db.users.find({'role':'doctor'}):
    print(d.get('email'))
print('admin count:', db.users.count_documents({'role':'admin'}))
for d in db.users.find({'role':'admin'}):
    print(d.get('email'))

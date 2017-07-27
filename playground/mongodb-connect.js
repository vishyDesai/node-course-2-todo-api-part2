//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://172.17.5.175:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect ot MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  /*db.collection('Todos').insertOne({
    text: 'Something to Do',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert Todos', err);
    }
    console.log(JSON.stringify(result.ops,undefined, 2));
  });*/

  /*db.collection('Users').insertOne({
    name: 'kaustubh Patil',
    age: 35,
    location: 'Mumbai'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert Users', err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });*/

  db.close();
});

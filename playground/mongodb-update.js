//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://172.17.5.175:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect ot MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('597afb3df24396193880ef99')}, {$set: {completed: true}}, {returnOriginal: false}).then((result) => {
  //  console.log(result);
  //});

  db.collection('Users').findOneAndUpdate({
     _id: new ObjectID('5979d9bef24396193880ef94')
   }, {
     $set: {name: 'Devesh'},
     $inc: {age: 4}
   }, {returnOriginal: false}).then((result) => {
    console.log(result);
  });

  db.close();
});

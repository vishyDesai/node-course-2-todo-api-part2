//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://172.17.5.175:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect ot MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  /*db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count ${count}`);
  },(err) => {
    console.log('unable to connect to todos', err);
  });*/

 db.collection('Users').find({name : 'Vishal Desai'}).toArray().then((doc) => {
   console.log(JSON.stringify(doc, undefined, 2));
 }, (err) => {
   console.log('Unable to get Document from Users');
 });

  db.close();
});

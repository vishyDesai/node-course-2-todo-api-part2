//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://172.17.5.175:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect ot MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //deleteMany

  //db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then(
  //  (result) => {
  //    console.log(result);
  //  }
  //);

  //deleteOne
  //db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then(
  //  (result) => {
//      console.log(result);
  //  }
//  );

  //findOne and delete

  //db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //    console.log(result);
  //});

  //db.collection('Users').deleteMany({name: 'ABC'}).then((result) => {
  //  console.log(result);
  //});

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5979c814c01e4947843bd1f5")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  db.close();
});

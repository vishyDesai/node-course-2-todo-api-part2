const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

var id = '597b225cf6323732f464b2ac1';

if (!ObjectID.isValid(id)) {
  console.log('ID not Valid');
}

User.findById(id).then((user) => {
  if(!user) {
    return console.log('USer not found');
  }
  console.log('User : ', user);
}).catch((e) => console.log(e));

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos >>> ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo >>> ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id >>> ', todo);
// }).catch((e) => {
//   console.log(e);
// });

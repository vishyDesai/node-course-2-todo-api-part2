const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
      res.status(404).send();
      return console.log('ID not Valid');
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      res.status(404).send();
      return console.log('ID not found');
    }
    //res.send(JSON.stringify(todo, undefined, 2));
    res.send(todo);
  },(e) => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on Port 3000');
});

module.exports = {app};

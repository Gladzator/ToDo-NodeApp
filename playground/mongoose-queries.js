const {ObjectID} = require('mongodb');

const mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ba76494d32d412310c93a9e';
var uid = '5ba62c91b57ce4046058ac65';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

if(!ObjectID.isValid(uid)) {
  console.log('User id not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  completed: false
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo By Id', todo)
}).catch((e) => console.log(e));

User.findById(uid).then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));

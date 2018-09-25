const {ObjectID} = require('mongodb');

const mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then(() => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: 'wsq'}).then((todo) => {
//
// });
//
// Todo.findByIdAndRemove('5baa3e04c598e02b7096179d').then((todo) => {
//   console.log(todo);
// });

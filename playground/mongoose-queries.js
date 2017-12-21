const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5a3c0e4b56a71154a1b89f48123';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then(todo => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todos', todo);
// }).catch(e => {
//     console.log(e);
// })

var id = '5a3b608b3bf5b11e97d8b8cd';

User.findById(id).then(user => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User', user);
}).catch(e => console.log(e));
var db = require('./db');

var User = {};
var Goal = {}

User.findByUsername = function(username) {
  return db('users').where({ username: username }).select('*')
    .then(function(user) {
      return user;
    })
    .catch(function(err) {
      console.error(err)
    });
};

User.addUsername = function(username, password) {
  console.log(username, password)
  db('users').insert({username: username, password: password})
  .then((response)=>{
    console.log('add to db')
  })
  .catch((response)=>{
    console.log(err, 'error saving in to db')
  })
}

User.checkUser = function(req){
  return db('users').where({ username: req }).select('*')
  .then((response)=>{
   return response
  })
  .catch((err)=>{
    console.log(err)
  })
}
User.login = function(username, password){
  console.log(username, password)
  return db('users').where({username:username, password:password}).select('*')
  .then((response)=>{
    console.log(response, 'in model')
    return response
  })
  .catch((err)=>{
    console.log(err)
  })
}
User.checkPassword = function(password){
  return db('users').where({password:password}).select('*')
  .then((response)=>{
    console.log(response, 'in model')
    return response
  })
  .catch((err)=>{
    console.log(err)
  })
}
module.exports = User;

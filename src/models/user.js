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

  db('users').insert({username: username, password: password})
  .then((response)=>{
    console.log('add to db')
  })
  .catch((response)=>{
    console.log(err, 'error saving in to db')
  })
}
User.checkUser = function(req){
  // console.log(req, 'inmodel')
  return db('users').where({ username: req }).select('*')
  .then((response)=>{
    // console.log(response)
   return response
  })
  .catch((err)=>{
    console.log(err)
    // return false
  })
//   knex.select('*').from('users').havingExists(function() {
//   this.select('*').from('accounts').whereRaw('users.account_id = accounts.id');
// })
  // console.log('in model users')
}
module.exports = User;

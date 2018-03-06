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
  return db('users').insert({username: 'eugene', password: 'hey'})
  .then((response)=>{
    console.log('add to db')
  })
  .catch((response)=>{
    console.log(err, 'error saving in to db')
  })
}

// Goal.addGoals = function(goal) {
//   return db('goals').insert({description: 'do solo sprint'})
// }

// TODO: ADD MORE MODEL FUNCTIONS HERE

module.exports = User;

var db = require('./db');

var Goal = {};

// TODO: ADD MORE MODEL FUNCTIONS HERE
Goal.addGoals = function(user_id, decsription, res) {
  db('goals').insert({user_id: 3  , description: 'doing solo sprint'})
  .then((response)=>{
    console.log('add to db goal')
    res.send()
  })
  .catch((err)=>{
    console.log(err, 'error saving in to db goal')
  });
};
Goal.findById = function(req,res) {
  // console.log(req, res)
  // console.log(db)
  db('goals').where({ id: 3 }).select('*')
    .then(function(goal) {
      // console.log(goal)
      res.send(goal)
    })
    .catch(function(err) {
      console.error(err, 'error getting from db')
    });
};
// Goal.updateGoal = function(id) {
//   return db('goal').where({id: id}).update({complete: 'true'})
// }
Goal.findByUserID = function(req,res) {
  console.log(req)
  db('goals').where({user_id : 1}).select('*')
  .then(function(goal){
    res.send(goal)
  })
  .catch(function(err){
    console.log(err, 'error getting by userid')
  })
}
module.exports = Goal;

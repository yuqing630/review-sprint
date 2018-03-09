var db = require('./db');

var Goal = {};

Goal.addGoals = function(req, res) {
  db('goals').insert({
    user_id: 1,
    title: req.body.data.userInput,
    description: req.body.data.userInputDesc,
    complete:false
  })
  .then((response)=>{
    console.log('add to db goal')
    res.send()
  })
  .catch((err)=>{
    console.log(err, 'error saving in to db goal')
  });
};
Goal.findById = function(req,res) {
  db('goals').where({complete: false}).select('*')
    .then(function(goal) {
      res.send(goal)
    })
    .catch(function(err) {
      console.error(err, 'error getting from db')
    });
};
Goal.findByUserID = function(req,res) {
  db('goals').where({user_id : 1}).select('*')
  .then(function(goal){
    res.send(goal)
  })
  .catch(function(err){
    console.log(err, 'error getting by userid')
  })
}
Goal.update = function(req, res){
  db('goals').where({id: req.body.id}).update({complete: true})
  .then((response)=>{
    res.send()
  })
  .catch((err)=>{
    console.log(err)
  })
}
Goal.findByComplete = function(req, res) {
  db('goals').where({complete: true}).select('*')
  .then(function(goal) {
    res.send(goal)
  })
  .catch(function(err){
    console.log(err)
  })
}
Goal.getDescription = function(req,res){
  db('goals').where({id: req.query.id}).select('description')
  .then((response)=>{
    res.send(response)
  })
  .catch((err)=>{
    console.log(err)
  })
}
module.exports = Goal;

var db = require('./db');

var Post = {};

Post.addPost = function(req,res){
  db('posts').insert({
    goal_id: req.body.id,
    post: req.body.userInput
  })
  .then((response)=>{
    res.send()
  })
  .catch((err)=>{
    console.log(err)
  })
}

Post.getPost = function(req,res){
  db('posts').where({goal_id : req.query.id}).select('*')
  .then((response)=>{
    res.send(response)
  })
  .catch((response)=>{
    console.log(err)
  })
}

module.exports = Post;

var router = require('express').Router();
var jwt = require('jwt-simple'); // for encoding and decoding tokens
var db = require('./models/db');
var user = require('./models/user');
var goal = require('./models/goal');
var posts = require('./models/post')
var jwt = require('jwt-simple')
var bcrypt = require('bcrypt')

router.get('/goals', goal.findById)
router.get('/Completed', goal.findByComplete)
router.get('/goals/id', goal.findByUserID)
router.post('/goals', goal.addGoals)
router.post('/complete', goal.update)
router.get('/description', goal.getDescription)
router.post('/post', posts.addPost)
router.get('/post', posts.getPost)

router.post('/signup', function(req,res) {
  var username = req.body.username;
  var password = req.body.password;
  var secret = "xxx"
  var token = jwt.encode(password, secret)

  user.checkUser(username)
  .then((response)=>{
    if(!response.length){
      // console.log('here')
      bcrypt.hash(password, 10, ((err,hash)=>{
        user.addUsername(username, hash)
        res.sendStatus(201)
      }))

    }
    else{
      res.sendStatus(409)
    }
  })
  .catch((err)=>{
    console.log(err)
  })
  // TODO: Complete the signup functionality:
    // Search for username
    // If taken, send a 409 status code
    // If available, hash the password and store it in the database
      // Send back a 201
});

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var secret ="xxx"
  // var token = jwt.encode(password, secret)
  // var decode = jwt.decode(token, secret)
  // console.log(decode)
  // var hash = bcrypt.hash(password, 10, ((err,hash)=>{
  //   return hash
  // }))
  // console.log(hash)

  var checkPassword = function(username, password){
    user.checkPassword(username, password)
  }
  // console.log(checkPassword(password), 'password')

  user.checkUser(username)
  .then((response)=>{
    // console.log(response, 'in routes')
    if(!response.length){
      // console.log('here')
      res.sendStatus(401)
    }else{
      // console.log(response[0].id)
      bcrypt.hash(password, 10, ((err,hash)=>{
        bcrypt.compare(password, hash, ((err, good)=>{
          if(good){
            var payload = {id: response[0].id}
            // var secret
            var token = jwt.encode(payload, secret)
            res.send(token)
          }else{
            res.sendStatus(401)
          }
           }))

      }))
    }
  })
  .catch((err)=>{
    console.log(err,'finding username')
  })

  // TODO: Complete the login functionality:
    // Search for username
    // If not found, send back a 401 status code
    // If found, compare the hashed passwords
      // If there is a match
        // Create a token and send it to the client
      // If the match fails send back a 401 status code
});

module.exports = router;

var router = require('express').Router();
var jwt = require('jwt-simple'); // for encoding and decoding tokens
var db = require('./models/db');
var user = require('./models/user');
var goal = require('./models/goal')


// TODO: ATTACH ROUTE HANDLERS
  // See 2-complete-routes/README.md for which routes you should implement first.

router.get('/goals', goal.findById)

router.get('/Completed', goal.findByComplete)

router.get('/goals/id', goal.findByUserID)

router.post('/goals', goal.addGoals)

router.post('/complete', goal.update)

router.get('/description', goal.getDescription)

router.post('/signup', function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the signup functionality:
    // Search for username
    // If taken, send a 409 status code
    // If available, hash the password and store it in the database
      // Send back a 201
});

router.post('/login', function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the login functionality:
    // Search for username
    // If not found, send back a 401 status code
    // If found, compare the hashed passwords
      // If there is a match
        // Create a token and send it to the client
      // If the match fails send back a 401 status code
});

module.exports = router;

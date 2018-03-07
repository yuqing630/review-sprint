var express = require('express');
var bodyParser = require('body-parser');
var db = require('../models/db')
var app = express();
var routes = require('../routes.js')
var path = require('path')
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));
// T: SET UP SERVER
  // Add middleware
  // Add static file service
  // Add API routes
app.use(routes)
// Example route. See server-spec.js for the related test.
app.get('/goals', routes)

app.get('/goals/id', routes)

app.post('/goals', routes)

app.post('/complete', routes)

app.get('/zen', function(req, res) {
  console.log(res)
  res.send('There are no accidents. - Master Oogway')
})

app.listen(8080, function () {
  console.log('GoalPosts App \nListening on port 000...')
})

module.exports = app;

var express = require('express');
var bodyParser = require('body-parser');
var db = require('../models/db')
var app = express();
var routes = require('../routes.js')
var path = require('path')
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'))

app.use(routes)

app.get('/zen', function(req, res) {
  console.log(res)
  res.send('There are no accidents. - Master Oogway')
})

app.listen(3000, function () {
  console.log('GoalPosts App \nListening on port 3000...')
})

module.exports = app;

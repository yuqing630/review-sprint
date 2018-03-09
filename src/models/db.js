var config = require('../knexfile.js')
var env ='development'

var conn =   {
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  // filename: './db.sqlite3',
  database: 'goal_app',
  charset: 'utf8'
}
var knex = require('knex')
({
  // client: 'sqlite3',
  client : 'mysql',
  connection: conn
});

module.exports = knex;

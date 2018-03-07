var config = require('../knexfile.js')
var env ='development'


var conn =   {
  host: 'localhost',
  user: 'student',
  password: '',
  filename: './db.sqlite3',
  // database: 'goal_app',
  charset: 'utf8'
}
var knex = require('knex')
({
    // TODO: ADD DATABASE CONNECTION INFO HERE
  client: 'sqlite3',
  connection: conn
});


// console.log(config)

module.exports = knex;

// knex.migrate.latest([config])

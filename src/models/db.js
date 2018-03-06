var config = require('../knexfile.js')
var env ='development'
var knex = require('knex')



({
  // TODO: ADD DATABASE CONNECTION INFO HERE
  client: 'sqlite3',
  connection: //config

    {
    host: 'localhost',
    user: 'student',
    password: '',
    //database: 'goal_app',
    filename: './db.sqlite3',
    charset: 'utf8'
}

});
// console.log(config)

module.exports = knex;

// knex.migrate.latest([config])

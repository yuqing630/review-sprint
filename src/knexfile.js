module.exports = {

  development: {
    // TODO: ADD CONNECTION INFO
    // client: 'sqlite3',
    client:'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'plantlife',
      database: 'goal_app'
      // filename: './db.sqlite3'
    }
  },
  seeds: {
    directory: './seeds/populate_tables.js'
  },
  migrations: {
    directory: './migrations/20170111171601_create_tables.js'
  }
};

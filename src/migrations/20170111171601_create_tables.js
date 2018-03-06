exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id').primary().unsigned();

    // TOD: DESCRIBE THE USER TABLE
    table.string('username');
    table.string('password')

  }),
  knex.schema.createTableIfNotExists('goals', function (table) {
    table.increments('id').primary().unsigned();
    table.integer('user_id').references('id').inTable('users').notNull();
    table.string('description');
    table.boolean('complete')
  })
])
  // TOD: CREATE ANY OTHER TABLES YOU NEED
};

exports.down = function(knex, Promise) {
  // T: DROP OTHER TABLES

  return Promise.all([
    knex.schema.dropTable('goals'),
    knex.schema.dropTable('users')

  ])

};
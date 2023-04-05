/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('item', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.integer('user_id');
    table.foreign('user_id').references('user.id');
    table.string('item_name');
    table.string('description');
    table.integer('quantity');
    table.string('image')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('item', table => {
    table.dropForeign('user_id');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('item');
  })
};

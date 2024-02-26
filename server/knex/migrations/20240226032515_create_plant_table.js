/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('plant', table => {
      table.increments('plant_id');
      table.string('name', 250);
      table.integer('category_id').unsigned();
      table.foreign('category_id').references('category.category_id');
      table.string('sunlight_preference', 500);
      table.string('water_preference', 500);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('plant', table => {
        table.dropForeign('category_id')
    })
    .then(function() {
        return knex.schema.dropTableIfExists('plant')
    })

};

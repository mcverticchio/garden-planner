/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('harvest', table => {
      table.increments('harvest_id');
      table.integer('plant_instance_id').unsigned();
      table.foreign('plant_instance_id').references('plant_instance.plant_instance_id');
      table.integer('quantity');
      table.date('date');
      table.text('notes', 1000);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('harvest', table => {
        table.dropForeign('plant_instance_id');
    })
    .then(function() {
        return knex.schema.dropTableIfExists('harvest')
    })
};

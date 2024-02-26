/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('plant_instance', table => {
      table.increments('plant_instance_id');
      table.integer('plant_id').unsigned();
      table.foreign('plant_id').references('plant.plant_id');
      table.string('description', 500);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('plant_instance', table => {
        table.dropForeign('plant_id')
    })
    .then(function() {
        return knex.schema.dropTableIfExists('plant_instance')
    })

};

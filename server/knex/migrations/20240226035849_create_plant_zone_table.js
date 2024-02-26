/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('plant_zone', table => {
      table.increments('plant_zone_id');
      table.integer('plant_id').unsigned();
      table.foreign('plant_id').references('plant.plant_id');
      table.integer('zone_id').unsigned();
      table.foreign('zone_id').references('zone.zone_id');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('plant_zone', table => {
        table.dropForeign('plant_id');
        table.dropForeign('zone_id');
    })
    .then(function() {
        return knex.schema.dropTableIfExists('plant_zone')
    })
};

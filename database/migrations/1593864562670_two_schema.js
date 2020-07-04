"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TwoSchema extends Schema {
  up() {
    this.create("twos", (table) => {
      table.increments();
      table.timestamps();
      table.integer("one_id").unsigned();
      table.foreign("one_id").references("ones.id").onDelete("cascade");
    });
  }

  down() {
    this.drop("twos");
  }
}

module.exports = TwoSchema;

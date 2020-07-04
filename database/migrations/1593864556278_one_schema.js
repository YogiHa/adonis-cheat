"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OneSchema extends Schema {
  up() {
    this.create("ones", (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("ones");
  }
}

module.exports = OneSchema;

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WishSchema extends Schema {
  up() {
    this.create('wishes', (table) => {
      table.increments()
      table.jsonb('events_id_array')
      table.integer('user_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('wishes')
  }
}

module.exports = WishSchema

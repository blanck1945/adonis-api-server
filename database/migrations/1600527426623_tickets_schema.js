'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketsSchema extends Schema {
  up() {
    this.create('tickets', (table) => {
      table.increments()
      table.string('event_day').notNullable()
      table.integer('event_day_num').notNullable()
      table.jsonb('event_tickets_types').notNullable()
      table.jsonb('event_tickets_sell').notNullable()
      table.jsonb('event_tickets_available').notNullable()
      table.integer('evento_id').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('tickets')
  }
}

module.exports = TicketsSchema

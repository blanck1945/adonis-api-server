'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventoSchema extends Schema {
  up() {
    this.create('eventos', (table) => {
      table.increments()
      table.string('event_name').notNullable()
      table.enu('event_type', ["Conferencia", "Debate", "Clase", "Obra de Teatro", "Competencia", "Otros"]).notNullable()
      table.json('event_dates')
      table.integer('event_price').unsigned().notNullable()
      table.string("event_img").notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('eventos')
  }
}

module.exports = EventoSchema

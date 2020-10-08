'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventoSchema extends Schema {
  up() {
    this.create('eventos', (table) => {
      table.increments()
      table.string('event_name').notNullable()
      table.text('event_desc').notNullable()
      table.jsonb('event_participants').nullable()
      table.jsonb('event_organizers').nullable()
      table.jsonb('event_social_link').nullable()
      table.enu('event_type', ["Conferencia", "Debate", "Clase", "Expresión Artistica", "Competencia", "Stream", "IRL", "Otros"]).notNullable()
      table.enu('event_category', ['Obra', 'Derecho', 'Sociales', 'Politica', 'Programación', 'Tecnologia', 'Información', 'Entretenimiento', 'Drama', 'Comedia'])
      table.json('event_dates').notNullable()
      table.string('event_week_day').notNullable()
      table.string('event_month').notNullable()
      table.string('event_start').notNullable()
      table.string('event_publish').notNullable()
      table.boolean('event_free').notNullable()
      table.boolean('event_discount').notNullable()
      table.integer('event_discount_per').notNullable()
      table.boolean('event_active').defaultTo(true)
      table.integer('event_tickets_total').notNullable()
      table.jsonb('event_tickets_types').notNullable()
      table.jsonb('event_tickets_price').notNullable()
      table.string("event_img").notNullable()
      table.integer('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }



  down() {
    this.drop('eventos')
  }
}

module.exports = EventoSchema


/*
   table.enu('event_country', ["Argentina", "Brasil", "Chile", "Uruguay"]).notNullable()
      table.enu('event_city', ["Buenos Aires", "Rosario", "Cordoba", "Mendoza", "Valparaiso", "Santiago de Chile", "Sao Pablo", "Salvador de Bahia", "Montevideo", "Punta del Este"])*/

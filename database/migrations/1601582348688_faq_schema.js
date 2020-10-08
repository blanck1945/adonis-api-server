'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FaqSchema extends Schema {
  up() {
    this.create('faqs', (table) => {
      table.increments()
      table.string('question').notNullable()
      table.jsonb('headers').notNullable()
      table.jsonb('anwsers').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('faqs')
  }
}

module.exports = FaqSchema

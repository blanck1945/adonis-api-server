'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserCardsSchema extends Schema {
  up() {
    this.create('user_cards', (table) => {
      table.increments()
      table.string('card').notNullable()
      table.enu('type', ["Debito", "Credito"]).notNullable()
      table.integer('public_num').notNullable()
      table.string('card_nums').notNullable().unsigned().unique()
      table.string('expiration_date').notNullable()
      table.string('security_code').notNullable().unsigned()
      table.boolean('default').notNullable()
      table.integer('user_id').references('id').inTable('users').unsigned().onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('user_cards')
  }
}

module.exports = UserCardsSchema

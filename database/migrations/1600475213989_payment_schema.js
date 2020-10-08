'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentSchema extends Schema {
  up() {
    this.create('payments', (table) => {
      table.increments()
      table.string("payment_name").notNullable()
      table.string('payment_type').notNullable()
      table.string("payment_country").notNullable()
      table.integer("payment_interest").nullable()
      table.jsonb("payment_dues").nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('payments')
  }
}

module.exports = PaymentSchema

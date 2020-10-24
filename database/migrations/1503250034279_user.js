'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.enu('user_role', ["promotor", "usuario", "administrador"]).notNullable()
      table.string('promotor_code').notNullable().unsigned()
      table.boolean('wish_list').defaultTo(false)
      table.boolean('to_remove').defaultTo(false)
      table.boolean('news').notNullable(false)
      table.boolean('recommend').defaultTo(false)
      table.boolean('offers').defaultTo(false)
      table.boolean('info').defaultTo(false)
      table.string("avatar").nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema

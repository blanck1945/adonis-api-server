'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleSchema extends Schema {
  up() {
    this.create('schedules', (table) => {
      table.increments()
      table.string("schedule_day").notNullable()
      table.text('schedule_desciption').notNullable()
      table.string("schedule_starting_time").notNullable()
      table.string('schedule_finishing_time').notNullable()
      table.jsonb("schedule_participants").notNullable()
      table.jsonb('schedule_hours').nullable()
      table.jsonb('schedule_host').nullable()
      table.jsonb('schedule_desc').nullable()
      table.integer('evento_id').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('schedules')
  }
}

module.exports = ScheduleSchema

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {

  static get table() {
    return "schedules"
  }

  static get hidden() {
    return ['created_at', 'updated_at', 'evento_id']
  }

  evento() {
    return this.belongsTo('App/Models/Evento')
  }
}

module.exports = Schedule

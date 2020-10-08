'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Evento extends Model {
  static get table() {
    return 'eventos'
  }

  static get computed() {
    return ['next_date', 'last_date', 'low_price', 'average_price']
  }

  static get hidden() {
    return ['created_at', 'updated_at']
  }

  ticket() {
    return this.hasMany('App/Models/Ticket')
  }

  schedule() {
    return this.hasMany('App/Models/Schedule')
  }
}

module.exports = Evento

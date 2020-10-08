'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Payment extends Model {
  static get table() {
    return "payments"
  }

  static get hidden() {
    return ['created_at', 'updated_at', 'evento_id']
  }
}

module.exports = Payment

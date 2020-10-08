'use strict'


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const User = use('App/Models/User')

class Promotor extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeSave', 'PromotorHook.HashCode')
  }

  static get table() {
    return ('users')
  }
}

module.exports = Promotor

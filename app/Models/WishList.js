'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class WishList extends Model {

  static get table() {
    return "wishes"
  }

  static get hidden() {
    return ['created_at', 'updated_at']
  }
}

module.exports = WishList

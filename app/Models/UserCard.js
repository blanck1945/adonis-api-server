'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserCard extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeSave', 'UserCardHook.EncryptCodeAndNum')
    this.addHook('afterFetch', 'UserCardHook.DecriptCodeAndNum')
  }


  static get table() {
    return "user_cards"
  }

  static get hidden() {
    return ['created_at', 'updated_at', 'security_code', 'card_nums', 'expiration_date']
  }
}

module.exports = UserCard

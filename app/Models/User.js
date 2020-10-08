'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeSave', 'PromotorHook.HashCode')
  }

  static get table() {
    return "users"
  }

  static get hidden() {
    return ['password', 'email', 'created_at', 'updated_at']
  }

  userEvents() {
    return this.hasMany('App/Models/Eventos')
  }

  userCards() {
    return this.hasMany('App/Models/UserCards')
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token')
  }
}



module.exports = User

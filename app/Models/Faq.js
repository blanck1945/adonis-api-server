'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Faq extends Model {
  static get table() {
    return 'faqs'
  }

  static get hidden() {
    return ['created_at', 'updated_at']
  }

  static get computed() {
    return ['openFaq']
  }
}

module.exports = Faq

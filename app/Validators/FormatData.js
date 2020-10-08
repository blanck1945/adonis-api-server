'use strict'

class FormatData {
  get sanitizationRules() {
    return {
      username: 'trim',
      email: 'trim',
      password: 'trim',
      oldPass: 'trim',
      newPass: 'trim',
      card: 'trim',
      type: 'trim',

    }
  }

}

module.exports = FormatData

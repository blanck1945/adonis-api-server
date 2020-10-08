'use strict'

class StoreUser {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required | unique:users',
      email: 'required | email | unique: users',
      password: 'required | min:6',
      user_role: 'required'
    }
  }

  get messages() {
    return {
      'username.required': "You must provide a username",
      'username.unique': "This username is already registered",
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password',
      'password.min': 'Passwords must be at least 6 characters long.',
      'user_role.required': 'You must provide a role'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreUser

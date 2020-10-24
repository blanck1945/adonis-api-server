'use strict'

const User = use('App/Models/User')
const Promotor = use('App/Models/Promotor')
const obtenerRes = use('App/Func/obtenerRes')
const db = use('Database')
const Hash = use('Hash')

class UserController {

  async changePass({ response, request, params, auth }) {
    try {
      const input = request.all()
      const user = await db.table('users').select('email').where('id', params.id)
      const { oldPass } = input
      const data = await auth.attempt(user[0].email, oldPass)
      if (!data) {
        return {
          msg: "No hay usuario con ese numero de ID"
        }
      }

      const newHashPass = await Hash.make(input.newPass)
      await User.query().where('email', user[0].email).update({ password: newHashPass })
      return response.json({
        msg: "Contraseña modificada con exito",
        state: true
      })
    }
    catch (err) {
      console.log(err)
      return response.json({
        msg: "Problema de servidor",
        err: err
      })
    }
  }

  async getEmail({ params, response }) {
    try {
      const userEmail = await db.table('users').select('email').where('id', params.id)
      const emailDomain = userEmail[0].email.split('@')
      const formatEmail = userEmail[0].email.slice(0, 4) + "*****" + '@' + emailDomain[1]
      return response.json({
        email: formatEmail
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async getWishList({ params, response }) {
    try {
      const userWishList = await db.table('users').select('wish_list').where('id', params.id)

      return response.json({
        userWishList
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async toogleWishList({ params, repsonse }) {
    try {
      await User.query().where('id', params.id).update({ wish_list: true })

      return repsonse.json({
        msg: "Lista de deseo creada con exito"
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async store({ response, request }) {
    try {
      const input = request.all()
      await User.create(input)

      return response.json({
        ...await obtenerRes('Usuario registrado con exito')
      })
    }
    catch (err) {
      console.log(err)
      return {
        msg: err,
        state: "Fail",
        action: false
      }
    }
  }

  async storePromotor({ response, request }) {
    try {
      const input = request.all()

      await Promotor.create(input)

      return response.json({
        ...await obtenerRes('Usuario registrado con exito')
      })
    }
    catch (err) {
      console.log(err)
      return {
        msg: err,
        state: "Fail",
        action: false
      }
    }
  }

  async login({ request, response, auth }) {
    try {

      const { email, password } = request.all()
      const token = await auth.withRefreshToken()
        .attempt(email, password)

      const user = await db.table('users').select('username', 'email', 'id', 'user_role', 'wish_list').where('email', email)
      const resOb = await obtenerRes(`Bienvenido ${user[0].username}`)
      const res = {
        ...resOb,
        id: user[0].id,
        user: user[0].username,
        role: user[0].user_role,
        token: token,
        wish_list: user[0].wish_list,
        email: user[0].email
      }

      return response.json({
        res
      })
    }
    catch (err) {
      return response.json({
        msg: "Credenciales invalidas",
        err: err,
        error: 401,
        log: false
      })
    }
  }

  async removeUser({ response, params }) {
    try {
      await User.query().where('id', params.id).update({ to_remove: true })
      return response.json({
        msg: "Usuario eliminado con exito. Recuerde que tiene 15 días para recuperar su cuenta."
      })
    }
    catch (err) {
      console.log(err)
      return response.json({
        msg: "No se pudo eliminar el usuario",
        err: err
      })
    }
  }

  async logUser({ response, auth }) {
    try {
      return await auth.getUser()
    }
    catch (err) {
      response.send({
        msg: "Ningun usurio autenticado"
      })
    }
  }

  checkOldPass = async (pass, oldPass) => {
    if (pass === oldPass) {
      return true
    }
    return false
  }


}

module.exports = UserController

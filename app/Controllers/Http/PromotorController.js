'use strict'

const Promotor = use('App/Models/Promotor')
const obtenerRes = use('App/Func/obtenerRes')

class PromotorController {
  async store({ response, request }) {
    try {
      const input = request.all()

      await Promotor.create(promotor)

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
    const { email, password, personal_code } = request.all()
    const token = await auth.withRefreshToken()
      .attempt(email, password, personal_code)

    const promotor = await db.table('users').select('username', 'role').where('email', email)
    const resOb = await obtenerRes(`Bienvenido ${user[0].username}`)
    const res = {
      ...resOb,
      user: promotor[0].username,
      role: promotor[0].role,
      token: token
    }

    return response.json({
      res
    })
  }
}

module.exports = PromotorController

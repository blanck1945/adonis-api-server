'use strict'


const UserCard = use('App/Models/UserCard')

class UserCardsController {

  async getUserPayments({ params, response }) {
    try {
      const payments = await UserCard.query().where('user_id', params.id).fetch()
      console.log(payments)
      return response.json({
        payments
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async store({ request, response, params }) {
    try {

      const input = request.all()
      console.log(input)
      const payment = {
        ...input,
        default: input.first ? true : false,
        public_num: input.card_nums.slice(0, 4),
        user_id: params.id
      }
      delete payment.first
      await UserCard.create(payment)

      return response.json({
        msg: "Forma de pago agregada con exito"
      })

    }
    catch (err) {
      console.log(err)
    }
  }

}

module.exports = UserCardsController

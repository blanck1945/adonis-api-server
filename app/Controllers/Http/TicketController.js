'use strict'

const Ticket = use('App/Models/Ticket')

class TicketController {
  async index() {
    const data = await Ticket.all()
    return data
  }


  async store({ request, response }) {
    const input = request.all()
    await Ticket.create(input)

    return response.json({
      msg: "tickets and dates correctle created"
    })

  }



}

module.exports = TicketController

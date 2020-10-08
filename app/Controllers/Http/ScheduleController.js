'use strict'

const Schedule = use('App/Models/Schedule')

class ScheduleController {


  async store({ request, response }) {
    const input = request.all()
    try {

      await Schedule.create(input)

      return response.json({
        msg: "tickets and dates correctle created"
      })
    }
    catch (err) {
      console.log(err)
    }
  }
}

module.exports = ScheduleController

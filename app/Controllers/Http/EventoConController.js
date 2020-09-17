'use strict'

const Evento = use('App/Models/Evento')
const { validateAll } = use('Validator')

class EventoConController {
  async index({ req, res }) {
    return await Evento.all()
  }

  async byName({ request }) {
    const { query } = request.all()
    if (!query) {
      return { msg: 'No hay parametro para realizar la consulta' }
    }

    const data = await Evento.query()
      .where('event_name', 'ilike', "%" + query + "%").fetch()
    if (data.rows.length === 0) {
      return { msg: 'No hay registro para ese parametro' }
    } else {
      return data
    }
  }

  async byType({ request }) {
    const { query } = request.all()
    if (!query) {
      return { msg: 'No hay parametro para realizar la consulta' }
    }

    const data = await Evento.query()
      .where('event_type', 'ilike', "%" + query + "%").fetch()
    if (data.rows.length === 0) {
      return { msg: 'No hay registro para ese parametro' }
    } else {
      return data
    }

  }

  async byPrice({ request }) {
    let { query, operator } = request.all()
    console.log(request.all())
    if (query === "gratis") {
      query = 0
    }
    const splitData = operator.slice(-1)

    const eventos = await Evento.query()
      .where('event_price', splitData, query).fetch()

    console.log(eventos)
    if (!eventos) {
      return { msg: 'No hay registro para ese parametro' }
    }

    return eventos
  }

  async show({ params }) {
    const event = await Evento.find(params.id)

    if (event) {
      return event
    } else {
      return { msg: 'No hay registro para ese parametro' }
    }
  }

  async store({ request, response }) {
    const input = request.all()

    const validation = await validateAll(input, {
      'event_name': 'required|min:3|max:100',
      'event_type': 'required',
      'event_dates': 'required',
      'event_price': 'required',
      'event_img': 'required'
    })

    if (validation.fails()) {
      return validation.messages()
    }

    const data = {
      ...input,
      event_dates: JSON.stringify([
        ...input.event_dates
      ])
    }

    await Evento.create(data)
    return response.json({
      state: 'Fullfil',
      timestamp: new Date(),
      message: "Registro creado con exito",
    })
  }
}

module.exports = EventoConController

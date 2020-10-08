'use strict'

const { populateArr, populateObj } = require("../../Func/addPrice")

const Evento = use('App/Models/Evento')
const Ticket = use("App/Models/Ticket")
const db = use('Database')
const { validateAll } = use('Validator')

class EventoConController {
  async index({ response }) {
    try {

      const eventos = await Evento.query().select("*").orderBy('id', 'asc').fetch()
      let data = eventos.toJSON()
      data = await populateArr(data)
      return response.json(
        data
      )
    }
    catch (err) {
      return {
        msg: "unable to send events",
        error: err
      }
    }
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
    if (query === "gratis") {
      query = 0
    }
    const splitData = operator.slice(-1)

    const eventos = await Evento.query()
      .where('event_price', splitData, query).fetch()

    if (!eventos) {
      return { msg: 'No hay registro para ese parametro' }
    }

    return eventos
  }

  async show({ params }) {

    const event = await Evento.find(params.id)
    const eventPopulate = await event.toJSON()
    const eventTickets = await event.ticket().fetch()
    const eventSchedule = await event.schedule().fetch()

    if (event) {
      return {
        ...await populateObj(eventPopulate),
        eventTickets,
        eventSchedule
      }
    } else {
      return { msg: 'No hay registro para ese parametro' }
    }
  }

  async store({ request, response }) {
    try {
      const input = request.all()
      if (input.terms) {
        delete input.terms
      }
      const validation = await this.validarData(input)

      if (validation.fails()) {
        return validation.messages()
      }

      const data = await this.formaterData(input)
      console.log(data)
      await Evento.create(data)
      console.log("event created")
      return response.json({
        ...await this.obtenerRes('Registro creado con exito')
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async update({ request, response, params }) {
    try {
      const input = request.all()

      const validation = await this.validarData(input)

      if (validation.fails()) {
        return validation.messages()
      }

      const data = await this.formaterData(input)

      await Evento.query()
        .where('id', params.id).update(data)


      return response.json({
        ...await this.obtenerRes(params.id, 'Registro actualizado con exito')
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async remove({ params, response }) {
    const data = await Evento.find(params.id)
    try {

      if (!data) {
        return { msg: 'No data found with that parameter' }
      }

      await data.delete()

      return response.json({
        ...await this.obtenerRes(params.id, 'Registro eliminado con exito')
      })

    }
    catch (err) {
      console.log(err)
      return { msg: err }
    }
  }

  async savePhoto({ request, response, params }) {
    try {

      const foto_evento = request.file('event_img', {
        types: ['image'],
        size: '2mb'
      })
      const nombreArchivo = params.id + "." + foto_evento.extname

      await foto_evento.move('./public/photos', {
        name: nombreArchivo,
        overwrite: true
      })

      if (!foto_evento.moved()) {
        return response.status(422).send({
          state: 'Failure',
          message: avatar.error()
        })
      }

      const data = await Evento.find(params.id)
      data.event_img = nombreArchivo
      await data.save()

      return response.json({
        ...await this.obtenerRes("Foto subida con exito")
      })
    }
    catch (err) {
      console.log(err)
    }

  }

  //Metodos


  validarData = async (input) => {
    return await validateAll(input, {
      'event_name': 'required|min:3|max:100',
      'event_type': 'required',
      'event_dates': 'required',
      'event_img': 'required'
    })
  }

  formaterData = async (input) => {
    const data = {
      ...input,
      event_dates: JSON.stringify([
        ...input.event_dates
      ])
    }
    return data
  }

  obtenerRes = async (msg, id = null) => {
    const res = await {
      state: 'Fullfil',
      timestamp: new Date(),
      message: msg,
      query: id,
    }
    return res
  }

}

module.exports = EventoConController

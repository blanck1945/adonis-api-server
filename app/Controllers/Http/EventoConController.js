'use strict'

const Evento = use('App/Models/Evento')

class EventoConController {
  async index({ req, res }) {
    return await Evento.all()
  }
}

module.exports = EventoConController

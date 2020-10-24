'use strict'

class HomeController {
  async home({ response }) {
    return response.json({
      greeting: 'Bienvenido a la API de RDVS.',
      public: "Eventos, Faqs",
      private: "User, Cards, Token",
    })
  }
}

module.exports = HomeController

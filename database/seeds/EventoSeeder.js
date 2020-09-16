'use strict'

/*
|--------------------------------------------------------------------------
| EventoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const DB = use('Database')

class EventoSeeder {
  async run() {
    await DB.table('eventos').insert([
      {
        'event_name': "Starry Session",
        'event_type': 'Obra de Teatro',
        'event_dates': JSON.stringify([
          '16/08/2020',
          '17/08/2020',
          '20/08/2020'
        ])
        ,
        event_price: 9900,
        event_img: "https://pbs.twimg.com/media/ENBuS3wUYAAL7SO?format=jpg&name=medium"
      }
    ])
  }
}

module.exports = EventoSeeder

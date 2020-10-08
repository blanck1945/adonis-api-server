'use strict'

/*
|--------------------------------------------------------------------------
| TicketSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const db = use('Database')

class TicketSeeder {
  async run() {
    await db.table('tickets').insert([
      {
        event_day: "25/08/2020",
        event_day_num: 1,
        event_tickets_types: JSON.stringify([
          "general"
        ]),
        event_tickets_sell: JSON.stringify([
          200
        ]),
        event_tickets_available: JSON.stringify([
          32
        ]),
        evento_id: 2
      },
      {
        event_day: "26/08/2020",
        event_day_num: 2,
        event_tickets_types: JSON.stringify([
          "general"
        ]),
        event_tickets_sell: JSON.stringify([
          200
        ]),
        event_tickets_available: JSON.stringify([
          61
        ]),
        evento_id: 2
      },
      {
        event_day: "27/08/2020",
        event_day_num: 3,
        event_tickets_types: JSON.stringify([
          "general"
        ]),
        event_tickets_sell: JSON.stringify([
          200
        ]),
        event_tickets_available: JSON.stringify([
          70
        ]),
        evento_id: 2
      },
      {
        event_day: "29/08/2020",
        event_day_num: 1,
        event_tickets_types: JSON.stringify([
          "general"
        ]),
        event_tickets_sell: JSON.stringify([
          0
        ]),
        event_tickets_available: JSON.stringify([
          0
        ]),
        evento_id: 3
      }
    ])
  }
}

module.exports = TicketSeeder

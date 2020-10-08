'use strict'

/*
|--------------------------------------------------------------------------
| PaymentSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const db = use('Database')

class PaymentSeeder {
  async run() {
    await db.table('payments').insert([
      {
        payment_name: "Visa",
        payment_type: "Debito",
        payment_country: "Argentina",
        payment_interest: 9,
        payment_dues: JSON.stringify([
          3, 6
        ])
      },
      {
        payment_name: "Visa",
        payment_type: "Credito",
        payment_country: "Argentina",
        payment_interest: 11,
        payment_dues: JSON.stringify([
          3, 6, 12
        ])
      },
      {
        payment_name: "MasterCard",
        payment_type: "Debito",
        payment_country: "Argentina",
        payment_interest: 7,
        payment_dues: JSON.stringify([
          3
        ])
      },
      {
        payment_name: "MasterCard",
        payment_type: "Credito",
        payment_country: "Argentina",
        payment_interest: 9,
        payment_dues: JSON.stringify([
          3, 6, 12
        ])
      }
    ])
  }
}

module.exports = PaymentSeeder

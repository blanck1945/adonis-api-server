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
const db = use('Database')

class EventoSeeder {
  async run() {
    await db.table('eventos').insert([
      {
        "event_name": "Starry Session",
        "event_desc": "Una noche de sueño junto con el casting de Starlight Kukugumi. Todos buscamos llegar a los más alto, aunque el precio sea.....",
        "event_participants": JSON.stringify(["Starligh Kukugumi"]),
        "event_organizers": JSON.stringify(["Bushiroad"]),
        "event_social_link": null,
        "event_type": "Expresión Artistica",
        "event_category": "Drama",
        "event_dates": JSON.stringify([
          "2020-09-16",
          "2020-09-17",
          "2020-09-18"
        ]),
        "event_week_day": "Viernes",
        "event_month": "Octubre",
        "event_start": "20:00",
        "event_publish": "05/08/2020",
        event_free: false,
        "event_discount": false,
        "event_discount_per": 0,
        "event_tickets_total": 660,
        "event_tickets_types": JSON.stringify([
          "simple",
          "medium",
          "premium"
        ]),
        "event_tickets_price": JSON.stringify([
          "6600",
          "8100",
          "9900"
        ]),
        "event_img": "https://pbs.twimg.com/media/ENBuS3wUYAAL7SO?format=jpg&name=medium"
      },
      {
        "event_name": "Protección animal: presente y futuro del derecho animal",
        "event_desc": "En la ultima decada hubo un rapido crecimiento en todo lo referido al derecho animal. Estos logros fundan una base solida para la expansión, pero tambien presentan desafios. En esta charla de 3 días se busca explicar y comentar sobre el estado actual de la materia.",
        "event_participants": JSON.stringify(["Emilia Marquez", "Roberto Barletti", "Vanessa Spano", "Adriana Grentwit", "Horacio Arevalo Ramons"]),
        "event_organizers": JSON.stringify(["Facultad de Derecho - Mariana Mercante", "Organización sudamericana para la defensa animal"]),
        "event_social_link": null,
        "event_type": "Conferencia",
        "event_category": "Derecho",
        "event_dates": JSON.stringify([
          "2020-09-25",
          "2020-09-26",
        ]),
        "event_week_day": "Domingo",
        "event_month": "Octubre",
        "event_start": "18:00",
        "event_publish": "14/08/2020",
        event_free: true,
        "event_discount": false,
        "event_discount_per": 0,
        "event_tickets_total": 200,
        "event_tickets_types": JSON.stringify([
          0
        ]),
        "event_tickets_price": JSON.stringify([
          0,
        ]),
        "event_img": "https://1.bp.blogspot.com/-PHZXJ1y61HU/XTcGnzGwZWI/AAAAAAAABU4/JgXzFXdxzuUuESjcZEwBQglQp3ildc2jgCEwYBhgL/s1600/unnamed.jpg"
      },
      {
        "event_name": "FORTFUND",
        "event_desc": "En este evento unico en latinoamerica, reconocidos gammers unen sus fuerzas para ayudar y entretener. Forma parte de un evento solidario unico junto a tus gammers y youtubers favoritos",
        "event_participants": JSON.stringify(["Czcko", "Cosco", "The Golden Boy", "Narissa_b", "thegrefg", "Foxxy"]),
        "event_organizers": JSON.stringify(["Twich", "Youtube", "Compromiso-Latinoamerica", "Epic Games"]),
        "event_social_link": null,
        "event_type": "Stream",
        "event_category": "Entretenimiento", //Juegos
        "event_dates": JSON.stringify([
          "2020-09-29",
          "2020-09-30",
          "2020-09-31"
        ]),
        "event_week_day": "Jueves",
        "event_month": "Octubre",
        "event_start": "12:00",
        "event_publish": "10/07/2020",
        event_free: false,
        "event_discount": false,
        "event_discount_per": 0,
        "event_tickets_total": 0,
        "event_tickets_types": JSON.stringify([
          "general"
        ]),
        "event_tickets_price": JSON.stringify([
          "1500",
        ]),
        "event_img": "https://cdn.vox-cdn.com/thumbor/Y96TN6QKhQU-i15xVjlMDyXpInE=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66937239/Fortnite_20200615140742.0.jpg"
      }
    ])
  }
}

module.exports = EventoSeeder

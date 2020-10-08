'use strict'

/*
|--------------------------------------------------------------------------
| ScheduleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const db = use('Database')


class ScheduleSeeder {
  async run() {
    await db.table('schedules').insert([
      {
        schedule_day: "16/08/2020",
        schedule_desciption: "Starry Session - Nueva obra de la franquicia Shoujo Kageki Revue Starlight. Luego de los exitos de Starry Desert y Starry Sky, esta tercera entrega promete impresionar a todos los espectadores",
        schedule_starting_time: "20:00",
        schedule_finishing_time: "22:30",
        schedule_participants: JSON.stringify(["Starlight Kukugumi"]),
        schedule_hours: [],
        schedule_host: [],
        schedule_desc: [],
        evento_id: 1
      },
      {
        schedule_day: "17/08/2020",
        schedule_desciption: "Starry Session - Nueva obra de la franquicia Shoujo Kageki Revue Starlight. Luego de los exitos de Starry Desert y Starry Sky, esta tercera entrega promete impresionar a todos los espectadores",
        schedule_starting_time: "20:00",
        schedule_finishing_time: "22:30",
        schedule_participants: JSON.stringify(["Starlight Kukugumi"]),
        schedule_hours: [],
        schedule_host: [],
        schedule_desc: [],
        evento_id: 1

      },
      {
        schedule_day: "18/08/2020",
        schedule_desciption: "Starry Session - Nueva obra de la franquicia Shoujo Kageki Revue Starlight. Luego de los exitos de Starry Desert y Starry Sky, esta tercera entrega promete impresionar a todos los espectadores",
        schedule_starting_time: "20:00",
        schedule_finishing_time: "22:30",
        schedule_participants: JSON.stringify(["Starlight Kukugumi"]),
        schedule_hours: [],
        schedule_host: [],
        schedule_desc: JSON.stringify(["Previo al inicio, habra un espectaculo de las chicas de la escuela Siegrfrid. Canciones: Discovery - Rose Poems - Union"]),
        evento_id: 1
      },
      {
        schedule_day: "25-08-2020",
        schedule_desciption: "FORTFUND - El evento solidario que junta la ayuda, el entretenimiento, los gammers y el publico",
        schedule_starting_time: "12:00",
        schedule_finishing_time: "00:30",
        schedule_participants: JSON.stringify([
          "Coscu",
          "The Golden Boy",
          "Narissa_b",
          "Lucha a muerte",
          "Fortnite at night"
        ]),
        schedule_hours: JSON.stringify([
          "12:00",
          "12:30",
          "14:00",
          "15:30",
          "17:00",
          "18:00",
          "19:00",
          "22:00",
          "23:30"
        ]),
        schedule_host: JSON.stringify([
          "T-Team - Ceremonia de inicio",
          "The Bamboo Meal Time",
          "Coscu",
          "The Golden Boy and Friends",
          "Narissa_b",
          "Ho-kago Tea Time", //18:00
          "Free - 4 pantallas",
          "Coscu y la Coscu Army",
          "Host Secreto"
        ]),
        schedule_desc: JSON.stringify([
          "Ceremonia de inicio con el grupo T-Team",
          "Cocina Gammer con los desafios culinarios de la mano de la tribu The Bambbo Meal Time",
          "Stream de Coscu - Guest: Julian Serrano",
          "Stream de Among Us a cargo de The Golden Boy junto a invitados sorpresa",
          "Narissa_b en su primera sessión de oldies, jugando un clasico de la play 1: Silent Hill",
          "Concierto de la banda Marilu interpretando los clasicos de K-On!",
          "Tiempo libre sin eventos agendados. Disfrute de nuestras 4 pantallas en simultaneo, más de 10 salas de juego o la trasmisión en vivo",
          "Challenge Dia 1: Infinite-Force formada por 5 reconocidos gammers se enfrentan a Coscu y 4 miembros de la Coscu Army. Un desafio unico para coronar la noche",
          "Host secreto para el segmento final de media hora. Mejores momentos del dia, información del día siguiente y más."
        ]),
        evento_id: 3
      }
    ])
  }
}

module.exports = ScheduleSeeder

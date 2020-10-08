const Axios = require("axios")

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYwMDQ4MDk4M30.t8uGbL7KEZ-_tu7s6yAof-F5VbzKOn6m7aIEg-UreE0"

const postEvento = async (evento) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const data = await Axios.post(
      'http://localhost:3333/api/eventos/create',
      evento,
      config
    )
    console.log(data)
    return data
  }
  catch (err) {
    console.log(err.response)
  }
}


const evento = {
  "event_name": "Starry Session",
  "event_desc": "Una noche de sueño junto con el casting de Starlight Kukugumi. Todos buscamos llegar a los más alto, aunque el precio sea.....",
  "event_participants": JSON.stringify(["Starligh Kukugumi"]),
  "event_organizers": JSON.stringify(["Bushiroad"]),
  "event_social_link": null,
  "event_type": "Obra de Teatro",
  "event_category": "Drama",
  "event_dates": [
    "16-08-2020",
    "17-08-2020",
    "20-08-2020"
  ],
  "event_country": "Argentina",
  "event_city": "Buenos Aires",
  "event_publish": "05/08/2020",
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
}
const newEvento =
{
  "event_name": "Protección animal: presente y futuro del derecho animal",
  "event_desc": "En la ultima decada hubo un rapido crecimiento en todo lo referido al derecho animal. Estos logros fundan una base solida para la expansión, pero tambien presentan desafios. En esta charla de 3 días se busca explicar y comentar sobre el estado actual de la materia.",
  "event_participants": JSON.stringify(["Emilia Marquez", "Roberto Barletti", "Vanessa Spano", "Adriana Grentwit", "Horacio Arevalo Ramons"]),
  "event_organizers": JSON.stringify(["Facultad de Derecho - Mariana Mercante", "Organización sudamericana para la defensa animal"]),
  "event_social_link": null,
  "event_type": "Conferencia",
  "event_category": "Derecho",
  "event_dates": [
    "25-08-2020",
    "26-08-2020",
    "27-08-2020"
  ],
  "event_country": "Uruguay",
  "event_city": "Montevideo",
  "event_publish": "14/08/2020",
  "event_discount": false,
  "event_discount_per": 0,
  "event_tickets_total": 200,
  "event_tickets_types": JSON.stringify([
    "general"
  ]),
  "event_tickets_price": JSON.stringify([
    "2600",
  ]),
  "event_img": "https://1.bp.blogspot.com/-PHZXJ1y61HU/XTcGnzGwZWI/AAAAAAAABU4/JgXzFXdxzuUuESjcZEwBQglQp3ildc2jgCEwYBhgL/s1600/unnamed.jpg"
}

const fortEvent = {
  "event_name": "FORTFUND",
  "event_desc": "En este evento unico en latinoamerica, reconocidos gammers unen sus fuerzas para ayudar y entretener. Forma parte de un evento solidario unico junto a tus gammers y youtubers favoritos",
  "event_participants": JSON.stringify(["Czcko", "Cosco", "The Golden Boy", "Narissa_b", "thegrefg", "Foxxy"]),
  "event_organizers": JSON.stringify(["Twich", "Youtube", "Compromiso-Latinoamerica", "Epic Games"]),
  "event_social_link": null,
  "event_type": "Otros",
  "event_category": "Programación", //Juegos
  "event_dates": [
    "29-08-2020",
  ],
  "event_country": "Chile",
  "event_city": "Santiago de Chile",
  "event_publish": "10/07/2020",
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

//const res = postEvento(fortEvent)

const postTicket = async (ticket, id) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const { data } = await Axios.post(
      'http://localhost:3333/api/tickets/create/' + id,
      ticket,
      config
    )
    console.log(data)
    return data
  }
  catch (err) {
    console.log(err.response)
  }
}

const newTicket = {
  event_day: "27/08/2020",
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
}

const fortTicket = {
  event_day: "29/08/2020",
  event_day_num: 2,
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

//postTicket(fortTicket, 3)

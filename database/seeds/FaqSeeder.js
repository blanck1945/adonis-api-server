'use strict'

/*
|--------------------------------------------------------------------------
| FaqSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const db = use('Database')

class FaqSeeder {
  async run() {
    await db.table('faqs').insert([
      {
        question: "Coronavirus: Noticias sobre el CoVID19",
        headers: JSON.stringify([
          "Vales de descuentos por Covid",
          "Empresa 100% remota",
          "Certificado de Covid seguro para eventos"
        ]),
        anwsers: JSON.stringify([
          "Vales en miles de eventos desde 5%,10%,20% y hasta 50% para que te quedes en casa",
          "Actualmente nuestras oficinas se encuentran cerradas y el personal efectua su trabajo 100% de manera remota",
          "Nuevo Certificado para eventos adecuados a las medidas de seguridad dictadas por las autoridades"
        ]),
      },
      {
        question: "Preguntas frecuentes",
        headers: JSON.stringify([
          "Espectaculos en Argentina: ¿En que me afecta la ley aprobada en Septiembre de 2020, sobre cambio de moneda extranjera?",
          "¿Qué formas de pago aceptan?",
          "Impuesto sobre Bienes y Servicios (GST) en Uruguay",
          "¿En que paises operamos?",
          "¿Como los contacto?",
        ]),
        anwsers: JSON.stringify([
          "El valor de los eventos sera abonado con la moneda que tengas acordad con el banco. En caso de ser en moneda extranjera SE TE DESCONTARA DEL CUPO MAXIMO MENSUAL",
          "Aceptamos tarjetas de credito, debito, transferencia, plataformas virtuales(paypal - mercadopago) En algunos eventos se acepta el pago con criptomonedas",
          "Actualmente no aplican a las entradas. Se modificarse la reglamentación infromaremos al respecto",
          "Operamos en Argentina, Brasil, Chile y Uruguay",
          "Tenemos una casilla de email para consultas. Nuestro equipo puede tardar hasta 48 en responder. Gracias por ser paciente",
        ])
      }
    ])
  }
}

module.exports = FaqSeeder

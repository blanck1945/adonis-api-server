'use strict'

const checkDuplicate = use('App/Func/checkDuplicate')

const WishList = use('App/Models/WishList')
const Evento = use('App/Models/Evento')

class WishListController {

  async store({ response, request, params }) {
    try {
      const { eventId } = request.all()
      const wishList = {
        events_id_array: JSON.stringify([
          eventId
        ]),
        user_id: params.id
      }

      await WishList.create(wishList)

      return response.json({
        msg: "Lista de Deseos creada con exito - Evento agregado con exito"
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async add({ response, request, params }) {
    try {
      const { eventId } = request.all()
      const data = await WishList.query().select('*').where('user_id', params.id).fetch()
      const wish = data.toJSON()
      const check = wish[0].events_id_array.find(el => el === eventId)
      if (check !== undefined) {
        return response.json({
          msg: "noAdd",
          state: true
        })
      }
      const arr = [...wish[0].events_id_array, eventId]

      await WishList
        .query()
        .where('user_id', params.id)
        .update({ events_id_array: JSON.stringify([...arr]) })

      return response.json({
        msg: "add",
        state: false
      })
    }
    catch (err) {
      console.log(err)
      return response.json({
        msg: "Problemas de Servidor"
      })
    }
  }

  async checkDuplicate({ params, response }) {
    try {
      const data = await WishList.query().select('*').where('user_id', params.user_id).fetch()
      const list = data.toJSON()
      const match = list[0].events_id_array.find(el => el === parseInt(params.id))
      console.log(match)
      if (match === undefined) {
        return response.json({
          state: true,
          toast: "add",
          msg: "Evento agreagado a su lista"
        })
      }

      return response.json({
        state: false,
        toast: 'noAdd',
        msg: "Este evento ya existe en su lista"
      })

    }
    catch (err) {
      console.log(err)
    }
  }

  async getUseWishList({ response, params }) {
    try {
      const data = await WishList.query().select('*').where("user_id", params.id).fetch()
      const wishList = await data.toJSON()

      const eventData = await Evento.all()
      const eventos = eventData.toJSON()
      const userWish = eventos.map(el => wishList[0].events_id_array.includes(el.id) ? { ...el, userWish: true } : { ...el, userWish: false })
      const userWishList = userWish.filter(el => el.userWish === true)
      return response.json({
        userWishList
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  async deleteEventFromUserWish({ params, request, response }) {
    try {
      const { eventId } = request.all()
      const data = await WishList.query().where('user_id', params.id).fetch()
      const wish = data.toJSON()
      const newArr = await wish[0].events_id_array.filter(el => el !== eventId ? el : null)
      console.log(newArr)

      await WishList
        .query()
        .where('user_id', params.id)
        .update({ events_id_array: JSON.stringify([...newArr]) })

      return response.json({
        msg: "Evento removido de su lista con exito"
      })
    }
    catch (err) {
      console.log(err)
      return response.json({
        error: err,
        msg: "Evento no se pudo eliminar"
      })

    }
  }

}

module.exports = WishListController

'use strict'

const { RouteResource, RouteGroup } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'HomeController.home')

//User Routes
Route.group(() => {
  //GET Routes
  Route.get("user/logged", 'UserController.logUser').middleware('auth')
  Route.get('user/get_email/:id', "UserController.getEmail")
  Route.get('api/user/get_wish_list/:id', "UserController.getWishList")

  //PATCH Routes
  Route.patch('user/toogle_wish_list/:id', "UserController.toogleWishList")

  //POST Routes
  Route.post("user/create", 'UserController.store').validator('StoreUser').validator("FormatData")
  Route.post("user/login", 'UserController.login').validator("FormatData")
  Route.post("user/create/promotor", 'UserController.storePromotor').validator('FormatData').validator('StoreUser')
  Route.post('user/change_password/:id', 'UserController.changePass').validator('FormatData')

  //PATCH Route
  Route.patch('user/remove/:id', 'UserController.removeUser')
}).prefix('api')

//User Payments
Route.group(() => {
  Route.get('user_payment/:id', 'UserCardsController.getUserPayments')


  Route.post('user_payment/create/:id', "UserCardsController.store").validator('FormatData')
}).prefix('api')

//Eventos Routes
Route.group(() => {

  //POST Routes
  Route.post("eventos/create", "EventoConController.store")
  Route.post('eventos/search_by_name', 'EventoConController.byName')

  //PATCH Routes
  Route.patch("eventos/patch/:id", 'EventoConController.patchOne')


  //GET Routes
  Route.get("eventos/type", 'EventoConController.byType')
  Route.get('eventos/price', 'EventoConController.byPrice')
  Route.get('eventos/:id', 'EventoConController.show')
  Route.get("eventos", 'EventoConController.index')
}).prefix('api/')

Route.group(() => {
  //POST Routes
  Route.post("eventos/create", 'EventoConController.store')
  Route.post("eventos/save_photo/:id", 'EventoConController.savePhoto')

  //PUT/PATCH Routes
  Route.put("eventos/update/:id", 'EventoConController.update')

  //DELETE Routes
  Route.delete("eventos/delete/:id", 'EventoConController.remove')
}).prefix('api')

//.middleware(['auth'])

//Tickets Routes
Route.group(() => {
  //GET ROUTES
  Route.get('tickets', 'TicketController.index')

  Route.post('tickets/create/:id', 'TicketController.store')
}).prefix('api')

//Schedule Routes
Route.group(() => {


  //POST Routes
  Route.post('schedule', 'ScheduleController.store')
}).prefix('api')

//WishList Routes
Route.group(() => {
  //GET Routes
  Route.get('wishlist/:id', 'WishListController.getUseWishList')
  Route.get('wishlist/check_duplicate/:id/:user_id', 'WishListController.checkDuplicate')


  //POST Routes
  Route.post('wishlist/create/:id', 'WishListController.store')
  Route.post('wishlist/add/:id', 'WishListController.add')

  //PATCH Routes
  Route.patch('wishlist/delete/:id', 'WishListController.deleteEventFromUserWish')

}).prefix('api')


//FAQ Routes
Route.group(() => {
  Route.get('faqs', 'FaqController.index')

}).prefix('api')

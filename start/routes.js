'use strict'

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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//event Routes
Route.post("/api/eventos/create", 'EventoConController.store')
Route.get("/api/eventos/name", 'EventoConController.byName')
Route.get("/api/eventos/type", 'EventoConController.byType')
Route.get('/api/eventos/price', 'EventoConController.byPrice')
Route.get('/api/eventos/:id', 'EventoConController.show')
Route.get("/api/eventos", 'EventoConController.index')

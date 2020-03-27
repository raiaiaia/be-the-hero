const express = require('express')
//conexão com o BD
const connection = require('./database/connection')

const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


//ta chamando a função index de OngController
routes.get('/ongs', OngController.index)

//ta chamando a função create de OngController
routes.post('/ongs', OngController.create)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)

//rota para login
routes.post('/sessions', SessionController.create)
//exportando as rotas
module.exports = routes

const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')



const routes = express.Router()

//ROTAS SESSION
routes.post('/sessions', SessionController.create)

//ROTAS ONG
routes.get('/ongs', OngController.index)
routes.post('/ongs',  OngController.create)

//ROTAS PROFILE
routes.get('/profile', ProfileController.index)

//ROTAS INCIDENTS
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes
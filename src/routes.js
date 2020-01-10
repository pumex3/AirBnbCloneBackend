const express = require ('express');
const SessionController = require ('./controllers/SessionController')
const SpotController = require ('./controllers/SpotController')

const routes = express.Router();


routes.post ('/sessions', SessionController.store) // Create
routes.post ('/spots', SpotController.store) // Create


module.exports = routes
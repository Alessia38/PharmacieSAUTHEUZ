// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlConnexion = require('../controllers/controllerConnexion.js');

routeur.post('/', ctrlConnexion.controlConnexion.Connexion)

module.exports = routeur;
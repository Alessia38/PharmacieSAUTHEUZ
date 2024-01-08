/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les routes concernant la connexion du pharmacien
*/

// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlConnexion = require('../controllers/controllerConnexion.js');

routeur.post('/', ctrlConnexion.controlConnexion.Connexion)

module.exports = routeur;
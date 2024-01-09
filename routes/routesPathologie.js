/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les routes concernant la pathologie
*/

// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlPathologie = require('../controllers/controllerPathologie.js');

routeur.get('/', ctrlPathologie.controlPath.lirePathologie)
routeur.post('/ajouter', ctrlPathologie.controlPath.ajouterPathologie)
routeur.get('/modifier/:id', ctrlPathologie.controlPath.lireUnePathologie)
routeur.put('/modifier/:id', ctrlPathologie.controlPath.modifierPathologie)
routeur.delete('/supprimer/:id', ctrlPathologie.controlPath.supprimerPathologie)

module.exports = routeur;
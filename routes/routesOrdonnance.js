/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les routes concernant l'ordonnance
*/

// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlOrdonnance = require('../controllers/controllerOrdonnance.js');

routeur.get('/', ctrlOrdonnance.controlOrdo.lireOrdonnance)
routeur.post('/ajouter', ctrlOrdonnance.controlOrdo.ajouterOrdonnance)
routeur.get('/modifier/:id', ctrlOrdonnance.controlOrdo.lireUneOrdonnance)
routeur.put('/modifier/:id', ctrlOrdonnance.controlOrdo.modifierOrdonnance)
routeur.delete("/supprimer/:id", ctrlOrdonnance.controlOrdo.supprimerOrdonnance)
routeur.get('/recherche', ctrlOrdonnance.controlOrdo.rechercherOrdonnance)

module.exports = routeur;
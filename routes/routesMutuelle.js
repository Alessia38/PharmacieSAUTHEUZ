/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les routes concernant la mutuelle
*/

// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMutuelle = require('../controllers/controllerMutuelle.js');

routeur.get('/', ctrlMutuelle.controlMutu.lireMutuelle)
routeur.post('/ajouter', ctrlMutuelle.controlMutu.ajouterMutuelle)
routeur.get('/modifier/:id', ctrlMutuelle.controlMutu.lireUneMutuelle)
routeur.put('/modifier/:id', ctrlMutuelle.controlMutu.modifierMutuelle)
routeur.delete('/supprimer/:id', ctrlMutuelle.controlMutu.supprimerMutuelle)
routeur.get('/recherche', ctrlMutuelle.controlMutu.rechercherMutuelle)

module.exports = routeur;
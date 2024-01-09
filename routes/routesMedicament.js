/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les routes concernant le médicament
*/

// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMedicament = require('../controllers/controllerMedicament.js');

routeur.get('/', ctrlMedicament.controlMedi.lireMedicament)
routeur.get('/modifier/:id', ctrlMedicament.controlMedi.lireUnMedicament)
routeur.put('/modifier/:id', ctrlMedicament.controlMedi.modifierMedicament)
routeur.post('/ajouter', ctrlMedicament.controlMedi.ajouterMedicament)
routeur.delete('/supprimer/:id', ctrlMedicament.controlMedi.supprimerMedicament)
routeur.get('/recherche', ctrlMedicament.controlMedi.rechercherMedicament)

module.exports = routeur;
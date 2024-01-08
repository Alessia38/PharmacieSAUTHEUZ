/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les routes concernant le médecin
*/

// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlMedecin = require('../controllers/controllerMedecin.js');

routeur.get('/', ctrlMedecin.controlMed.lireMedecin)
routeur.get('/modifier/:id', ctrlMedecin.controlMed.lireUnMedecin)
routeur.put('/modifier/:id', ctrlMedecin.controlMed.modifierMedecin)
routeur.post('/ajouter', ctrlMedecin.controlMed.ajouterMedecin)
routeur.get('/recherche', ctrlMedecin.controlMed.rechercherMedecin)
routeur.delete('/supprimer/:id', ctrlMedecin.controlMed.supprimerMedecin)

module.exports = routeur;
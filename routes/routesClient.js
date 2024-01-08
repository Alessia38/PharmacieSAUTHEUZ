/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les routes concernant le client
*/

// Routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlClient = require('../controllers/controllerClient.js');

routeur.get('/', ctrlClient.controlCli.lireClient)
routeur.get('/modifier/:id', ctrlClient.controlCli.lireUnClient)
routeur.post('/ajouter', ctrlClient.controlCli.ajouterClient)
routeur.post('/modifier/:id', ctrlClient.controlCli.modifierClient)
routeur.get('/supprimer/:id', ctrlClient.controlCli.supprimerClient)
routeur.get('/rechercher/:id', ctrlClient.controlCli.rechercherClient)

module.exports = routeur;
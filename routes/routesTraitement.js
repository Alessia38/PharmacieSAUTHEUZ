/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les routes concernant le traitement
*/

// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();
const ctrlTraitement = require('../controllers/controllerTraitement.js');

routeur.get('/:id', ctrlTraitement.controlTrait.lireTraitement)
routeur.post('/formulaire', ctrlTraitement.controlTrait.ajouterTraitement)
routeur.get('/modifier/:id', ctrlTraitement.controlTrait.lireUnTraitement)
routeur.put('/modifier/:id', ctrlTraitement.controlTrait.modifierTraitement)
routeur.delete('/supprimer/:id', ctrlTraitement.controlTrait.supprimerTraitement)

module.exports = routeur;
/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Projet scolaire de deuxième année en BTS SIO option SLAM : Intranet CRUD pour une Pharmacie
 */

// Modules
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

// Importer les routes
const medecinRoutes = require('./routes/routesMedecin.js');
const clientRoutes = require('./routes/routesClient.js');
const medicamentRoutes = require('./routes/routesMedicament.js');
const pathologieRoutes = require('./routes/routesPathologie.js');
const mutuelleRoutes = require('./routes/routesMutuelle.js');
const ordonnanceRoutes = require('./routes/routesOrdonnance.js');
const traitementRoutes = require('./routes/routesTraitement.js');
const connexionRoutes = require('./routes/routesConnexion.js');

// activer les dépendances pour Express et EJS
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// activation middleware et lancement de l'app sur le port 3000
app.use(express.json());
app.use(express.urlencoded());
app.listen(3000, () => console.log('le serveur Pharmacie sautheuz est prêt.'))

// utilisation des routes
app.use('/medecin', medecinRoutes);
app.use('/client', clientRoutes);
app.use('/mutuelle', mutuelleRoutes);
app.use('/medicament', medicamentRoutes);
app.use('/pathologie', pathologieRoutes);
app.use('/ordonnance', ordonnanceRoutes);
app.use('/traitement', traitementRoutes);
app.use('/connexion', connexionRoutes);
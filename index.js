/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Projet scolaire de deuxième année en BTS SIO option SLAM : Intranet CRUD pour une Pharmacie
 */

// Modules
const express = require('express');
const mysql = require('mysql2');
const iniparser = require('iniparser');
const configDB = iniparser.parseSync('./DB.ini')
const app = express()

// Importer les routes
const medecinRoutes = require('./routes/routesMedecin.js');
const clientRoutes = require('./routes/routesClient.js');
const medicamentRoutes = require('./routes/routesMedicament.js');
const pathologieRoutes = require('./routes/routesPathologie.js');
const mutuelleRoutes = require('./routes/routesMutuelle.js');
const ordonnanceRoutes = require('./routes/routesOrdonnance.js');
const traitementRoutes = require('./routes/routesTraitement.js');
const connexionRoutes = require('./routes/routesConnexion.js');

// Connection à la bdd
let mysqlconnexion = mysql.createConnection({
    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database']
   })

   mysqlconnexion.connect((err) => {
    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
   });

// Activer les dépendances pour Express et EJS
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'))
app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Activation middleware et lancement de l'app sur le port 3000
app.use(express.json());
app.listen(3000, () => console.log('Le serveur Pharmacie Sautheuz est prêt.'))

// Utilisation des routeurs
app.get('/', (req, res) => {
    res.send('La Pharmacie Sautheuz est active, veuillez entrer "http://localhost:3000/principal" afin de naviguer sur la fenêtre principale');
});

//Affichage de la page d'accueil
app.get('/accueil', function(req, res) {
    res.render('accueil');
});

// Affichage de la page de connexion pour le pharmacien
app.get('/connexion', function(req, res) {
    res.render('connexion');
});

app.get('/principal', function(req, res) {
    res.render('principal');
});


// Utilisation des routes
app.use('/medecin', medecinRoutes);
app.use('/client', clientRoutes);
app.use('/mutuelle', mutuelleRoutes);
app.use('/medicament', medicamentRoutes);
app.use('/pathologie', pathologieRoutes);
app.use('/ordonnance', ordonnanceRoutes);
app.use('/traitement', traitementRoutes);
app.use('/connexion', connexionRoutes);
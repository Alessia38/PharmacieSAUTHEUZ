/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les fonctions liées au modèle de données des mutuelles
*/

// Dépendances et middlewares
const mysql = require('mysql2');
let iniparser = require('iniparser');
const bodyparser = require('body-parser')

// Dépendances bdd
let configDB = iniparser.parseSync('./DB.ini')
let mysqlconnexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'pharmacie'
})

// Connexion bdd
mysqlconnexion.connect((err) => {
    if (!err) console.log('BDD connectée.')
    else console.log('BDD connexion échouée \n Erreur: '+JSON.stringify(err))
})

const ModelMutu = {

    // Liste des mutuelles
    async lireMutuelle() {
        return new Promise((reussi, echec) => {
            mysqlconnexion.query("SELECT * FROM mutuelle", (err, lignes) => {
                if (err) {
                    return echec(lignes)
                }
                return reussi(lignes)
            })
        })
    },

    // Lire UNE SEULE mutuelle
    async lireUneMutuelle(req) {

        // Id de la mutuelle récupérée
        let mutuId = req.params.id

        // Requête SQL pour afficher une mutuelle
        let requete = "SELECT * FROM mutuelle WHERE mutu_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [mutuId] ,(err, lignes)=> {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Ajout d'une mutuelle
    async ajouterMutuelle(req) {

        // Nom, numéro de téléphone et mail de la mutuelle récupérés
        let mutuNom = req.body.mutuNom
        let mutuTel = req.body.mutuTel
        let mutuMail = req.body.mutuMail

        // Requête SQL pour l'ajout d'une mutuelle 
        let requete = "INSERT INTO mutuelle (mutu_nom, mutu_tel, mutu_mail) VALUES (?, ?, ?)"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [mutuNom, mutuTel, mutuMail] ,(err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Modification d'une mutuelle
    async modifierMutuelle(req) {

        // Id, nom, numéro de téléphone et mail de la mutuelle récupérés
        let mutuId = req.params.id
        let mutuNom = req.body.mutuNom
        let mutuTel = req.body.mutuTel
        let mutuMail = req.body.mutuMail

        // Requête SQL pour mettre à jour la mutuelle dans la bdd
        let requete = "UPDATE mutuelle SET mutu_nom = ?, mutu_tel = ?, mutu_mail = ? WHERE mutu_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [mutuId, mutuNom, mutuTel, mutuMail], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Suppression d'une mutuelle 
    async supprimerMutuelle(req) {

        // Id de la mutuelle récupéré
        let mutuId = req.params.id
    
        // Requête SQL pour supprimer une mutuelle
        let requete = "DELETE FROM mutuelle WHERE mutu_id = ?"
        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [mutuId], (err, lignes) => {
                if(err){
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Recherche d'une mutuelle en fonction de son id
    async rechercherMutuelle(req) {

        // Id de la mutuelle récupéré
        let mutuId = req.params.id
        
        // Requête SQL pour rechercher une mutuelle 
        let requete = "SELECT * FROM mutuelle WHERE mutu_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [mutuId], (err, lignes, champs) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    }
}

module.exports = {
    ModelMutu
}
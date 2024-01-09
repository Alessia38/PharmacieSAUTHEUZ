/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les fonctions liées au modèle de données des clients
*/

// Dépendances et middlewares
const mysql = require('mysql2');
let iniparser = require('iniparser');

const ModelCli = {

    // Liste des clients
    async lireClient() {
        return new Promise((reussi, echec) => {
            mysqlconnexion.query("SELECT * FROM client, mutuelle WHERE cli_mutId = mutu_id;", (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Lire UN SEUL client
    async lireUnClient(req) {

        // Id du client récupéré
        let cliId = req.params.id

        // Requête SQL pour afficher un client
        let requete = "SELECT * FROM client WHERE cli_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [cliId] ,(err, lignes)=> {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Ajout d'un client
    async ajouterClient(req) {

        // Nom, prénom, date de naissance, numéro de sécu sociale et id de la mutuelle du client récupérés 
        let cliNom = req.body.cliNom
        let cliPrenom = req.body.cliPrenom
        let cliDateNaiss = req.body.cliDateNaiss
        let cliNumSecu = req.body.cliNumSecu
        let cliMutId = req.body.cliMutId

        // Requête SQL pour l'ajout du client
        let requete = "INSERT INTO client (cli_nom, cli_prenom, cli_dateNaiss, cli_numSecu, cli_mutId) VALUES ( ?, ?, ?, ?, ?)"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [cliNom, cliPrenom, cliDateNaiss, cliNumSecu, cliMutId] ,(err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Modification d'un client
    async modifierClient(req){

        // Id, nom, prénom, date de naissance, numéro de sécu sociale et id de la mutuelle du client récupérés
        let cliId = req.params.id
        let cliNom = req.body.cliNom
        let cliPrenom = req.body.cliPrenom
        let cliDateNaiss = req.body.cliDateNaiss
        let cliNumSecu = req.body.cliNumSecu
        let cliMutId = req.body.cliMutId

        // Requête SQL pour mettre à jour le client dans la bdd
        let requete = "UPDATE client SET cli_nom = ?, cli_prenom = ?, cli_dateNaiss = ?, cli_numSecu = ?, cli_mutId = ? WHERE cli_id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [cliId, cliNom, cliPrenom, cliDateNaiss, cliNumSecu, cliMutId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Suppression d'un client en fonction de son id
    async supprimerClient(req) {

        // Id du client récupéré
        let cliId = req.params.id

        // Requête SQL pour supprimer un client
        let requete = "DELETE FROM client WHERE cli_id = ?"

        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [cliId], (err, lignes) => {
                if(err){
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Recherche d'un client en fonction de son id
    async rechercherClient (req) {

        // Id du client récupéré
        let cliId = req.params.id
        
        // Requête SQL pour rechercher un client
        let requete = "SELECT cli_id, cli_nom, cli_prenom, cli_dateNaiss, cli_numSecu, cli_mutId FROM client WHERE cli_id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [cliId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })   
    }
}

module.exports = {
    ModelCli
}
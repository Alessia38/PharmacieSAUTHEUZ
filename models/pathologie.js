/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les fonctions liées au modèle de données des pathologies
*/

// Dépendances et middlewares
const mysql = require('mysql2');
let iniparser = require('iniparser');
const configDB = iniparser.parseSync('./DB.ini')

// Connection à la bdd
let mysqlconnexion = mysql.createConnection({
    host:configDB['dev']['host'],
    user:configDB['dev']['user'],
    password:configDB['dev']['password'],
    database:configDB['dev']['database']
   })

const ModelPath = {

    // Liste des pathologies
    async lirePathologie() {
        return new Promise((reussi, echec) => {
            mysqlconnexion.query("SELECT * FROM pathologie", (err, lignes) => {
                if (err) {
                    return echec(lignes)
                }
                return reussi(lignes)
            })
        })
    },

    // Lire UNE SEULE pathologie
    async lireUnePathologie(req) {

        // Id de la pathologie récupéré
        let pathId = req.params.id

        // Requête SQL pour afficher une seule pathologie
        let requete = "SELECT * FROM pathologie WHERE path_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [pathId] ,(err, lignes)=> {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Ajout d'une pathologie
    async ajouterPathologie(req) {

        // Nom de la pathologie récupéré
        let pathNom = req.body.pathNom

        // Requête SQL pour l'ajout d'une pathologie
        let requete = "INSERT INTO pathologie (path_nom) VALUES (?)"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [pathNom] ,(err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Modification d'une pathologie
    async modifierPathologie(req) {

        // Id et nopm de la pathologie récupérés
        let pathId = req.params.id
        let pathNom = req.body.pathNom

        // Requête SQL pour mettre à jour la pathologie dans la bdd
        let requete = "UPDATE pathologie SET path_nom = ? WHERE path_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [pathNom, pathId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Suppression d'une pathologie
    async supprimerPathologie(req) {

        // Id de la pathologie récupéré
        let pathId = req.params.id
    
        // Requête SQL pour supprimer une pathologie
        let requete = "DELETE FROM pathologie WHERE path_id = ?"
        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [pathId], (err, lignes, champs) => {
                if(err){
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Recherche d'une pathologie en fonction de son id
    async rechercherPathologie(req) {

        // Id de la pathologie récupéré
        let pathId = req.params.id
        
        // Requête SQL pour rechercher une pathologie
        let requete = "SELECT * FROM pathologie WHERE path_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [pathId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })  
    }
}

module.exports = {
    ModelPath
}
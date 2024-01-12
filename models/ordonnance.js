/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les fonctions liées au modèle de données des ordonnances
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

const ModelOrdo = {

    // Liste des ordonnances
    async lireOrdonnance() {

        // Requête SQL pour afficher plusieurs ordonnances
        let requete = "SELECT * FROM ordonnance, patient, medecin, pathologie WHERE ordo_cliId = cli_id AND ordo_medId = med_id AND ordo_pathId = path_id"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, (err, lignes) => {
                if (err) {
                    return echec(lignes)
                }
                return reussi(lignes)
            })
        })
    },

    // Lire UNE SEULE ordonnance
    async lireUneOrdonnance(req) {

        // Id de l'ordonnance récupéré
        let ordoId = req.params.id

        // Requête SQL pour afficher une seule ordonnance
        let requete = "SELECT * FROM ordonnance WHERE ordo_id = ?"
        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [ordoId], (err, lignes) => {
                if(err){
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Ajout d'une ordonance
    async ajouterOrdonnance(req) {

        // Date de l'ordonnance, id de la pathologie, id du médecin, id du client récupérés
        let ordoDate = req.body.ordoDate
        let ordoPathId = req.body.ordoPathId
        let ordoMedId = req.body.ordoMedId
        let ordoCliId = req.body.ordoCliId

        // Requête SQL pour l'ajout d'une ordonnance 
        let requete = "INSERT INTO ordonnance (ordo_date, ordo_pathId, ordo_medId, ordo_cliId) VALUES (?, ?, ?, ?)"
        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [ordoDate, ordoPathId, ordoMedId, ordoCliId], (err, lignes) => {    
                if(err){    
                    return echec(err)   
                }    
                return reussi(lignes)   
            })
        })
    },

    // Modification d'une ordonnance
    async modifierOrdonnance(req) {

        // Id, date, client, médecin et pathologie de l'ordonnance récupérés
        let ordoId = req.params.id
        let ordoDate = req.body.ordoDate
        let ordoCliId = req.body.ordoCliId
        let ordoMedId = req.body.ordoMedId
        let ordoPathId = req.body.ordoPathId

        // Requête SQL pour mettre à jour l'ordonnance dans la bdd
        let requete = "UPDATE ordonnance SET ordo_date = ?, ordo_cliId = ?, ordo_medId = ?, ordo_pathId = ? WHERE ordo_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [ordoDate, ordoCliId, ordoMedId, ordoPathId, ordoId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Suppression d'une ordonnance
    async supprimerOrdonnance(req) {

        // Id de l'ordonnance récupéré
        let ordoId = req.params.id
    
        // Requête SQL pour supprimer une ordonnance
        let requete = "DELETE FROM ordonnance WHERE ordo_id = ?"
        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [ordoId], (err, lignes, champs) => {   
                if(err){    
                    return echec(err)   
                }    
                return reussi(lignes)    
            })
        })
    },

    // Recherche d'une ordonnance en fonction de son id
    async rechercherOrdonnance(req) {

        // Id de l'ordonnance récupéré
        let ordoId = req.params.id
        
        // Requête SQL pour rechercher une ordonnance
        let requete = "SELECT * FROM ordonnance, patient, medecin, pathologie WHERE ordo_cliId = cli_id AND ordo_medId = med_id AND ordo_pathId = path_id AND ordo_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [ordoId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })  
    }
}

module.exports = {
    ModelOrdo
}
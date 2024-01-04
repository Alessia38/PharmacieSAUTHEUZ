/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les fonctions liées au modèle de données des médicaments
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

const Medicament = {

    // Liste des médicaments
    async lireMedicament() {
        return new Promise((reussi, echec) => {
            mysqlconnexion.query("SELECT * FROM medicament", (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Lire UN SEUL médicament
    async lireUnMedicament(req) {

        // Id du médicament récupéré
        let mediId = req.params.mediId

        // Requête SQL pour afficher un médicament
        let requete = "SELECT * FROM medicament WHERE medi_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [mediId] ,(err, lignes)=> {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Ajout d'un médicament
    async ajouterMedicament(req) {

        // Nom, type et quantitée en stock du médicament récupérés
        let mediNom = req.body.mediNom
        let mediType = req.body.mediType
        let mediStock = req.body.mediStock

        // Requête SQL pour l'ajout d'un médicament
        let requete = "INSERT INTO medicament (medi_nom, medi_type, medi_stock) VALUES ( ?, ?, ?)"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [mediNom, mediType, mediStock] ,(err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Modification d'un médicament
    async modifierMedicament(req) {

        // Id, nom, type et quantitée en stock du médicament récupérés
        let mediId = req.params.mediId
        let mediNom = req.body.mediNom
        let mediType = req.body.mediType
        let mediStock = req.body.mediStock

        // Requête SQL pour mettre à jour le médicament dans la bdd
        let requete = "UPDATE medicament SET medi_nom = ?, medi_type = ?, medi_stock = ? WHERE medi_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [mediNom, mediType, mediStock, mediId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Suppression d'un médicament
    async supprimerMedicament(req) {

        //Id du médicament récupéré
        let mediId = req.params.mediId
    
        // Requête SQL pour supprimer un médicament
        let requete = "DELETE FROM medicament WHERE medi_id = ?"
        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [mediId], (err, lignes) => {
                if(err){
                    return echec(err) 
                }
                return reussi(lignes)
            })
        })
    },

    // Recherche d'un médicament en fonction de son id
    async rechercherMedicament(req) {

        // Id du médicament récupéré
        let mediId = req.body.mediId
        
        // Requête SQL pour rechercher un médicament
        let requete = "SELECT medi_id, medi_nom, medi_type, medi_stock FROM medicament WHERE medi_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [mediId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })  
    }
}

module.exports = {
    lireMedicament,
    lireUnMedicament,
    ajouterMedicament,
    modifierMedicament,
    supprimerMedicament,
    rechercherMedicament
}
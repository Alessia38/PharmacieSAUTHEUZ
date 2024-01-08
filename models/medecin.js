/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent les fonctions liées au modèle de données des médecins
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

const ModelMed = {

    // Liste des médecins
    async lireMedecin() {
        return new Promise((reussi, echec) => {
            mysqlconnexion.query("SELECT med_id, med_nom, med_prenom FROM medecin;", (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Lire UN SEUL médecin
    async lireUnMedecin(req) {

        // Id du médecin récupéré
        let medId = req.params.id

        // Requête SQL pour afficher un médecin
        let requete = "SELECT * FROM medecin WHERE med_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [medId] ,(err, lignes)=> {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Ajout d'un médecin
    async ajouterMedecin(req) {

        // Nom et prénom du médecin récupérés 
        let medNom = req.body.medNom
        let medPrenom = req.body.medPrenom

        // Requête SQL pour l'ajout du médecin
        let requete = "INSERT INTO medecin (med_nom, med_prenom) VALUES ( ?, ?)"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [medNom, medPrenom] ,(err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Modification d'un médecin
    async modifierMedecin(req){

        // Id, nom et prénom du médecin récupérés
        let medId = req.params.id
        let medNom = req.body.medNom
        let medPrenom = req.body.medPrenon

        // Requête SQL pour mettre à jour le médecin dans la bdd
        let requete = "UPDATE medecin SET med_nom = ?, med_prenom = ? WHERE med_id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [medNom, medPrenom, medId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Suppression d'un médecin en fonction de son id
    async supprimerMedecin(req) {

        // Id du médecin récupéré
        let medId = req.params.id

        // Requête SQL pour supprimer un médecin
        let requete = "DELETE FROM medecin WHERE med_id = ?"

        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [medId], (err, lignes, champs) => {
                if(err){
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Recherche d'un médecin en fonction de son id
    async rechercherMedecin (req) {

        // Id du médecin récupéré
        let medId = req.params.id
        
        // Requête SQL pour rechercher un médecin
        let requete = "SELECT med_id, med_nom, med_prenom FROM medecin WHERE med_id = ?"

        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [medId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })   
    }
}

module.exports = {
    ModelMed
}


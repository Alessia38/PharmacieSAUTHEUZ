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

const Traitement = {

    // Liste des traitements
    async lireTraitement(req) {

        // Id de l'ordonnance du traitement récupéré
        let traitOrdoId = req.params.id

        // Requête SQl pour afficher des traitements 
        let requete = "SELECT * FROM ordonnance, traitement, medicament WHERE trait_ordoId = ordo_id AND trait_mediId = medi_id AND trait_ordoId = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [traitOrdoId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Lire UN SEUl traitement
    async lireUnTraitement(req) {

        // Id du traitement récupéré 
        let traitId = req.params.id

        // Requête SQL pour afficher un seul traitement
        let requete = "SELECT * FROM traitement WHERE trait_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [traitId] ,(err, lignes)=> {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Ajout d'un traitement
    async ajouterTraitement(req) {

        // Id de l'ordonnance du traitement, quantitée de médicaments, durée du traitement et id du médicament récupérés
        let traitOrdoId = req.body.traitOrdoId
        let traitQteMedi = req.body.traitQteMedi
        let traitDuree = req.body.traitDuree
        let traitMediId = req.body.traitMediId

        // Requête SQL pour l'ajout d'un traitement
        let requete = "INSERT INTO traitement (trait_ordoId, trait_qteMedi, trait_duree, trait_mediId) VALUES (?, ?, ?, ?)"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [traitOrdoId, traitQteMedi, traitDuree, traitMediId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Modification d'un traitement
    async modifierTraitement(req) {

        // Id, id de l'ordonnance, quantitée de médicaments, durée du traitement et id du médicament récupérés
        let traitId = req.params.id
        let traitOrdoId = req.body.traitOrdoId
        let traitQteMedi = req.body.traitQteMedi
        let traitDuree = req.body.traitDuree
        let traitMediId = req.body.traitMediId

        // Requête SQL pour mettre à jour le traitement dans la bdd 
        let requete = "UPDATE traitement SET trait_ordoId = ?, trait_qteMedi = ?, trait_duree = ?, trait_mediId = ? WHERE trait_id = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [traitOrdoId, traitQteMedi, traitDuree, traitMediId, traitId], (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Suppression du traitement 
    async supprimerTraitement(req) {

        // Id du traitement récupéré
        let traitId = req.params.id
    
        // Requête SQL pour supprimer un traitement
        let requete = "DELETE FROM traitement WHERE trait_id = ?"
        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [traitId], (err, lignes) => {
                if(err){
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    },

    // Recherche d'un traitement en fonction de son id
    async rechercherTraitement(req) {
        
        // Id du traitement récupéré
        let traitId = req.params.id

        // Requête SQL pour rechercher un traitement
        let requete = "SELECT * FROM traitement WHERE trait_id = ?"
        return new Promise((reussi, echec)=>{
            mysqlconnexion.query(requete, [traitId], (err, lignes) => {
                if(err){
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    }
}

module.exports = {
    lireTraitement,
    lireUnTraitement,
    ajouterTraitement,
    modifierTraitement,
    supprimerTraitement,
    rechercherTraitement
}
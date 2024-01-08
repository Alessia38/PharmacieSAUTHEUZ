/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent la fonction liée à la connexion du pharmacien
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

const modelConnexion = {

    // Connexion du pharmacien
    async connexion(req) {

        // Identifiant et mot de passe du pharmacien récupérés
        let pharmIdent = req.body.pharmIdent
        let pharmMdp = req.body.pharmMdp

        // Requête SQL pour la connexion du pharmacien
        let requete = "SELECT COUNT(*) FROM pharmacien WHERE pharm_identifiant = ? AND pharm_mdp = ?"
        return new Promise((reussi, echec) => {
            mysqlconnexion.query(requete, [pharmIdent, pharmMdp] , (err, lignes) => {
                if (err) {
                    return echec(err)
                }
                return reussi(lignes)
            })
        })
    }
}

module.exports = {
    modelConnexion
}
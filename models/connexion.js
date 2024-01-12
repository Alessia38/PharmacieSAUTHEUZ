/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouvent la fonction liée au modèle de données de la connexion du pharmacien
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
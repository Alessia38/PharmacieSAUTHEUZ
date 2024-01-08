/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve le contrôleur de la connexion
*/

const modelConnexion = require('../models/connexion');

const controlConnexion = {

    // Connexion du pharmacien
    async Connexion(req, res) {

        try {
            
            const data = await modelConnexion.ConnexionPharmacien.Connexion(req)

            if (data[0]['COUNT(*)'] == 1) {
                res.render('accueil')

            }else {
                res.redirect("/connexion")
            } 
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    controlConnexion
}
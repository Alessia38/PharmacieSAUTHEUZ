/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve le contrôleur des clients
*/

const Client = require('../models/client')
const Mutuelle = require('../models/mutuelle')

const controlCli = {

    // Liste des clients
    async lireClient(req, res) {
        try {
            // Appel fonction => model (client.js)
            const client = await Client.lireClient()

            if (client) {
                res.render('client', {dataClient : client}) // Emmène vers la page client

            }else {
                res.render('client', {dataClient : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Lire UN SEUL client
    async lireUnClient(req, res) {
        try {
            const dataCli = await Client.lireUnClient(req)
            const dataMutu = await Mutuelle.lireMutuelle()

            if (dataCli && dataMutu) {
                res.render("modifierClient", {dataClient : dataCli, dataMutuelle : dataMutu})
            }else {
                res.render("modifierClient", {dataClient : {}, dataMutuelle : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Ajout d'un client
    async ajouterClient(req, res) {
        try {
            const data = await Client.ajouterClient(req);
    
            if (data) {
                res.redirect("/client/details");
            } else {
                console.log("problème");
                res.redirect("/client/details");
            }
        } catch (error) {
            console.log(error);
            res.redirect("/client/details");
        }
    },
    
    // Suppression d'un client
    async supprimerClient(req, res) {
        try {

            const data = await modelMed.Medecin.supprimerMedecin(req)

            if (data) {

                res.redirect("/medecins/afficher");

            } else {

                console.log("probleme");
                res.redirect("/medecins/afficher");
            }
        } catch (error) {
            console.log(error)
        }
    },

    async modifierMedecin(req, res) {
        try {
            const medId = req.body.medId;
            const medNom = req.body.medNom;
            const medPrenom = req.body.medPrenom;
            console.log(medId, medNom, medPrenom)
            const data = await modelMed.Medecin.modifierMedecin(medId, medNom, medPrenom);

            if (data) {
                res.redirect("/medecins/afficher");
            } else {
                console.log("probleme");
                res.redirect("/medecins/afficher");
            }
        } catch (error) {
            console.log(error);
        }   
    }
}    

module.exports = {
    controlCli
}
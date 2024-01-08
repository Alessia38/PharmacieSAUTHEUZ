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
            const client = await Client.ModelCli.lireClient(req)
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
            // Appel fonction => models (client.js & mutuelle.js)
            const dataCli = await Client.ModelCli.lireUnClient(req)
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
            const data = await Client.ModelCli.ajouterClient(req);
    
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

    // Modification d'un client
    async modifierClient(req, res) {
        try {
            const data = await Client.ModelCli.modifierClient(req)

            if (data) {
                res.redirect("/client")

            }else {
                console.log("probleme")
                res.redirect("client/modifier/" + req.params.cliId)
            } 
        } catch (error) {
            console.log(error)
        }
    },
    
    // Suppression d'un client
    async supprimerClient(req, res) {
        try {
            const data = await Client.ModelCli.supprimerClient(req)

            if (data) {

                res.redirect("/client/lire");

            } else {

                console.log("probleme");
                res.redirect("/client/lire");
            }
        } catch (error) {
            console.log(error)
        }
    },

    // Recherche d'un client 
    async rechercherClient(req, res) {
        try {  
            const data = await Client.ModelCli.rechercherClient(req)

            if (data) {
                res.render('rechercheClient', {dataClient : data})

            }else {
                res.render('rechercheClient', {dataClient : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },
}    

module.exports = {
    controlCli
}
/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve le contrôleur des ordonnances
*/

const Ordonnance = require('../models/ordonnance')
const Medicament = require('../models/medicament')
const Pathologie = require('../models/pathologie')
const Client = require('../models/client')
const Medecin = require('../models/medecin')

const controlOrdo = {

    // Liste des ordonnances
    async lireOrdonnance(req, res) {
        try {
            // Appel fonction => model (ordonnance.js)
            const dataOrdo = await Ordonnance.ModelOrdo.lireOrdonnance(req)
            if (dataOrdo) {
                res.render('intranetOrdonnance', {dataOrdonnance : dataOrdo})
            }else {
                res.render('intranetOrdonnance', {dataOrdonnance : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Lire UNE SEULE ordonnance
    async lireUneOrdonnance(req, res) {
        try {
            // Appel fonctions => models (ordonnance.js, medecin.js, client.js et pathologie.js)
            const dataOrdo = await Ordonnance.ModelOrdo.lireUneOrdonnance(req)
            const dataMed = await Medecin.ModelMed.lireMedecin(req)
            const dataPat = await Client.ModelCli.lireClient(req)
            const dataPath = await Pathologie.ModelPath.lirePathologie(req)

            if (dataOrdo && dataMed && dataPat && dataPath) {
                res.render("modifierOrdonnance", {dataOrdonnance : dataOrdo, dataMedecin : dataMed, dataPatient : dataPat, dataPathologie : dataPath})
            }else {
                res.render("modifierOrdonnance", {dataOrdonnance : {}, dataMedecin : {}, dataPatient : {}, dataPathologie : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Ajout d'une ordonnance
    async ajouterOrdonnance(req, res){
        try {
            const data = await Ordonnance.ModelOrdo.ajouterOrdonnance(req)
            if(data){    
                res.redirect("/ordonnance");    
            }else{    
                console.log("probleme");
                res.redirect("/ordonnance");
            }
        } catch (error) {
            console.log(error)
        }
    },

    // Modification d'une ordonnance
    async modifierOrdonnance(req, res) {
        try {
            const data = await Ordonnance.ModelOrdo.modifierOrdonnance(req)
            if (data) {
                res.redirect("/ordonnance")

            }else {
                console.log("probleme")
                res.redirect("ordonnance/modifier/" + req.params.ordoId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Suppression d'une ordonnance
    async supprimerOrdonnance(req, res){
        try {    
            const data = await Ordonnance.ModelOrdo.supprimerOrdonnance(req)
            if(data){
                res.redirect("/ordonnance");
            }else{
                console.log("probleme");
                res.redirect("/ordonnance");
            }
        } catch (error) {
            console.log(error)
        }
    },

    // Recherche d'une ordonnance
    async rechercherOrdonnance(req, res) {
        try {
            const data = await Ordonnance.ModelOrdo.rechercherOrdonnance(req)
            if (data) {
                res.render('rechercheOrdonnance', {dataOrdonnance : data})

            }else {
                res.render('rechercheOrdonnance', {dataOrdonnance : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = {
    controlOrdo
}
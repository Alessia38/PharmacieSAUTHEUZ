/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve le contrôleur des traitements
*/

const Traitement = require('../models/traitement')
const Medicament = require('../models/medicament')

const controlTrait = {

    // Liste des traitements
    async lireTraitement(req, res) {
        try {
            // Appel fonction => model (traitement.js)
            const dataTrait = await Traitement.ModelTrait.lireTraitement(req)
            if (dataTrait) {
                res.render('traitement', {dataTraitement : dataTrait})
            }else {
                res.render('traitement', {dataTraitement : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Lire UN SEUL traitement
    async lireUnTraitement(req, res) {
        try {
            const dataTrait = await Traitement.ModelTrait.lireUnTraitement(req)
            const dataMedic = await Medicament.ModelMedi.lireMedicament(req)
            if (dataTrait && dataMedic) {
                res.render("modifierTraitement", {dataTraitement : dataTrait, dataMedicament : dataMedic})

            }else {
                res.render("modifierTraitement", {dataTraitement : {}, dataMedicament : {}})
            }
        } catch (error) {
            console.log(error)
        }
    },

    // Ajouter un traitement
    async ajouterTraitement(req, res) {
        try {
            const dataTrait = await Traitement.ModelTrait.ajouterTraitement(req)
            if (dataTrait) {
                res.redirect("/ordonnance")
            }else {
                console.log("probleme")
                res.render("traitement/details")
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Modification d'un traitement
    async modifierTraitement(req, res) {
        try {
            const data = await Traitement.ModelTrait.modifierTraitement(req)
            if (data) {
                res.redirect("/ordonnance")
            }else {
                console.log("probleme")
                res.redirect("traitement/modifier/" + req.params.traitId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Suppression d'un traitement
    async supprimerTraitement(req, res){
        try {
            const data = await Traitement.ModelTrait.supprimerTraitement(req)
            if(data){
                res.redirect("/ordonnance");
            }else{
                console.log("probleme");
                res.redirect("/ordonnance");
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    controlTrait
}
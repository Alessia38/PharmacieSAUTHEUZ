/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve le contrôleur des pathologies
*/

const Pathologie = require('../models/pathologie')

const controlPath = {

    // Liste des pathologies
    async lirePathologie(req, res) {
        try {
            // Appel fonction => model (pathologie.js)
            const data = await Pathologie.ModelPath.lirePathologie(req)
            if (data) {
                res.render('pathologie', {dataPathologie : data})
            }else {
                res.render('pathologie', {dataPathologie : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Lire UNE SEULE pathologie
    async lireUnePathologie(req, res) {
        try {
            const dataPath = await Pathologie.ModelPath.lireUnePathologie(req)
            if (dataPath) {
                res.render("modifierPathologie", {dataPathologie : dataPath})
            }else {
                res.render("modifierPathologie", {dataPathologie : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Ajout d'une pathologie
    async ajouterPathologie(req, res) {
        try {
            const data = await Pathologie.ModelPath.ajouterPathologie(req)

            if (data) {
                res.redirect("/pathologie")

            }else {
                console.log("probleme")
                res.render("pathologie/details")
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Modification d'une pathologie
    async modifierPathologie(req, res) {
        try {
            const data = await Pathologie.ModelPath.modifierPathologie(req)

            if (data) {
                res.redirect("/pathologie")

            }else {
                console.log("probleme")
                res.redirect("pathologie/modifier/" + req.params.pathId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Suppression d'une pathologie
    async supprimerPathologie(req, res){
        try {
            const data = await Pathologie.ModelPath.supprimerPathologie(req)
            if(data){
                res.redirect("/pathologie");
            }else{
                console.log("probleme");
                res.redirect("/pathologie");
            }
        } catch (error) {
            console.log(error)
        }
    },
}


module.exports = {
    controlPath
}
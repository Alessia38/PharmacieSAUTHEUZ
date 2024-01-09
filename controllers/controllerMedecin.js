/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve le contrôleur des médecins
*/

const Medecin = require('../models/medecin');

const controlMed = {

    // Liste des médecins
    async lireMedecin(req, res) {
        try {
           // Appel fonction => model (medecin.js) 
            const data = await Medecin.ModelMed.lireMedecin(req)
            if (data) {
                res.render('medecin', {dataMedecin : data})
            }else {
                res.render('medecin', {dataMedecin : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Lire UN SEUL médecin
    async lireUnMedecin(req, res) {
        try {
            // Appel fonction => model (medecin.js)
            const dataMed = await Medecin.ModelMed.lireUnMedecin(req)
            if (dataMed) {
                res.render("modifierMedecin", {dataMedecin : dataMed})

            }else {
                res.render("modifierMedecin", {dataMedecin : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Ajout d'un médecin
    async ajouterMedecin(req, res) {
        try {
            const data = await Medecin.ModelMed.ajouterMedecin(req)
            if (data) {
                res.redirect("/medecin")
            }else {
                console.log("probleme")
                res.render("medecin/details")
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Modification d'un médecin
    async modifierMedecin(req, res) {
        try {
            const data = await Medecin.ModelMed.modifierMedecin(req)
            if (data) {
                res.redirect("/medecin")
            }else {
                console.log("probleme")
                res.redirect("medecin/modifier/" + req.params.medId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Suppression d'un médecin
    async supprimerMedecin(req, res){
		try {
			const data = await Medecin.ModelMed.supprimerMedecin(req)
			if(data){
				res.redirect("/medecin");
			}else{
				console.log("probleme");
				res.redirect("/medecin");
			}
		} catch (error) {
			console.log(error)
		}
	},

    // Recherche d'un médecin
    async rechercherMedecin(req, res) {
        try {
            const data = await Medecin.ModelMed.rechercherMedecin(req)
            if (data) {
                res.render('rechercheMedecin', {dataMedecin : data})
            }else {
                res.render('rechercheMedecin', {dataMedecin : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    controlMed
}
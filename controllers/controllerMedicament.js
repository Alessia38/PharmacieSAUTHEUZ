/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve le contrôleur des médicaments
*/

const Medicament = require('../models/medicament')

const controlMedi = {

    // Liste des médicaments
    async lireMedicament(req, res) {
        try {
            // Appel fonction => model (medicament.js)
            const data = await Medicament.ModelMedi.lireMedicament(req)
            if (data) {
                res.render('medicament', {dataMedicament : data})
            }else {
                res.render('medicament', {dataMedicament : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Lire UN SEUL médicament
    async lireUnMedicament(req, res) {
        try {
            // Appel fonction => model (medicament.js)
            const dataMedi = await Medicament.ModelMedi.lireUnMedicament(req)
            if (dataMedi) {
                res.render("modifierMedicament", {dataMedicament : dataMedi})
            }else {
                res.render("modifierMedicament", {dataMedicament : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Ajout d'un médicament
    async ajouterMedicament(req, res) {
        try {
            const data = await Medicament.ModelMedi.ajouterMedicament(req)
            if (data) {
                res.redirect("/medicament")
            }else {
                console.log("probleme")
                res.render("medicament/details")
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Modification d'un médicament
    async modifierMedicament(req, res) {
        try {
            const data = await Medicament.ModelMedi.modifierMedicament(req)
            if (data) {
                res.redirect("/medicament")
            }else {
                console.log("probleme")
                res.redirect("medicament/modifier/" + req.params.mediId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Suppression d'un médicament
    async supprimerMedicament(req, res){
		try {
			const data = await Medicament.ModelMedi.supprimerMedicament(req)
			if(data){
				res.redirect("/medicament");
			}else{
				console.log("probleme");
				res.redirect("/medicament");
			}
		} catch (error) {
			console.log(error)
		}
	},

    // Recherche d'un médicament
    async rechercherMedicament(req, res) {
        try {
            const data = await Medicament.ModelMedi.rechercherMedicament(req)
            if (data) {
                res.render('rechercheMedicament', {dataMedicament : data})
            }else {
                res.render('rechercheMedicament', {dataMedicament : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = {
    controlMedi
}
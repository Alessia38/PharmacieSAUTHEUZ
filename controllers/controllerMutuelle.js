/**
 * @author Alessia TORNABENE
 * @version 1.0.0
 * @description Ci-dessous se trouve le contrôleur des mutuelles
*/

const Mutuelle = require('../models/mutuelle')

const controlMutu = {

    // Liste des mutuelles
    async lireMutuelle(req, res) {
        try {
            // Appel fonction => model (mutuelle.js)
            const data = await Mutuelle.ModelMutu.lireMutuelle(req)
            if (data) {
                res.render('mutuelle', {dataMutuelle : data})
            }else {
                res.render('mutuelle', {dataMutuelle : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Lire UNE SEULE mutuelle
    async lireUneMutuelle(req, res) {
        try {
            const dataMut = await Mutuelle.ModelMutu.lireUneMutuelle(req)
            if (dataMut) {
                res.render("modifiermutuelle", {dataMutuelle : dataMut})
            }else {
                res.render("modifiermutuelle", {dataMutuelle : {}})
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Ajout d'une mutuelle
    async ajouterMutuelle(req, res) {
        try {
            const data = await Mutuelle.ModelMutu.ajouterMutuelle(req)
            if (data) {
                res.redirect("/mutuelle")
            }else {
                console.log("probleme")
                res.render("mutuelle/details")
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Modification d'une mutuelle
    async modifierMutuelle(req, res) {
        try {          
            const data = await Mutuelle.ModelMutu.modifierMutuelle(req)
            if (data) {
                res.redirect("/mutuelle")
            }else {
                console.log("probleme")
                res.redirect("mutuelle/modifier/" + req.params.mutuId)
            } 
        } catch (error) {
            console.log(error)
        }
    },

    // Suppression d'une mutuelle
    async supprimerMutuelle(req, res){
		try {
			const data = await Mutuelle.ModelMutu.supprimerMutuelle(req)
			if(data){
				res.redirect("/mutuelle");
			}else{
				console.log("probleme");
				res.redirect("/mutuelle");
			}
		} catch (error) {
			console.log(error)
		}
	},

    // Recherche d'une mutuelle
    async rechercherMutuelle(req, res) {
        try {           
            const data = await Mutuelle.ModelMutu.rechercherMutuelle(req)
            if (data) {
                res.render('rechercheMutuelle', {dataMutuelle : data})
            }else {
                res.render('rechercheMutuelle', {dataMutuelle : {} })
            } 
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = {
    controlMutu
}
const Main = require('../models/event.model');

module.exports = {
    //C
    createEvent: (req, res) => {
        Main.create(req.body)
            .then(data => res.status(200).json({message:"success", results: data}))
            .catch(err => res.json({message:"error", errors: err.errors }))
    },

    //R
    getAllEvent: (req, res) => {
        Main.find()
            .then(data => res.status(200).json({message:"success", results: data}))
            .catch(err => res.json({message:"error", errors: err.errors }))
    },
    getOneEvent: (req,res) => {
        Main.findById(req.params.id)
            .then(data => res.status(200).json({message:"success", results: data}))
            .catch(err => res.json({message:"error", errors: err.errors }))
    },

    //U
    updateEvent: (req, res) => {
        Main.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
            .then(data => res.status(200).json({message:"success", results: data}))
            .catch(err => res.json({message:"error", errors: err.errors }))
    },
    //D
    deleteEvent: (req, res) => {
        Main.remove({_id: req.params.id})
            .then(data => res.status(200).json({message:"success", results: data}))
            .catch(err => res.json({message:"error", errors: err.errors }))
    }
}
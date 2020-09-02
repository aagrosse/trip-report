const db = require('../models')

// Defining methods
module.exports = {
    findAll: function(req, res) {
      db.Trip.find(req.query)
        // .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Trip.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByUserId: function(req, res) {
      db.Trip.find( req.params.userId)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log(req.body)
      db.Trip.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      const { _id } = req.body;
      
      db.Trip.findByIdAndUpdate(_id, req.body)
        .then(dbModel => 
          {console.log("Update Trip",req.body)
          res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Trip
        .findById({ _id: req._id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}; 
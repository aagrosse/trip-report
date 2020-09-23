const db = require('../models')

// Defining methods
module.exports = {
    findAll: function(req, res) {
      db.CaveAl.find(req.query)
        // .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.CaveAl.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByUserId: function(req, res) {
      db.CaveAl.find( req.params.userId)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      
      db.CaveAl.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      const { _id } = req.body;
      console.log(_id)
      db.CaveAl
        .findOneAndUpdate(_id, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      
      db.CaveAl
        .findById({ _id: req.params.id  })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}; 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    tripName: { type: String, required: true },
    people: [{type: String, required: true}],
    type: {type: String},
    lat: {type: String, trim: true},
    long: {type: String, trim: true},
    description: String,
    image: {type: String, trim: true},
    date: { type: Date, default: Date.now }
  });
  
  const Trip = mongoose.model("trip", tripSchema);
  
  module.exports = Trip;
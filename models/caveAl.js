const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const caveSchema = new Schema({
  type:{ type: String },
  features:[{
    type: { type: String },
    properties: {
      name: { type: String },
      cmt: { type: String },
      desc: { type: String },
      type: { type: String },
      time: { type: String },
      sym: { type: String },
    },
    geometry: {
      type: { type: String },
      coordinates: [
        { type: Number }
      ]
    }
  }]
    });
  
  const CaveAl = mongoose.model("CaveAl", caveSchema);
  
  module.exports = CaveAl;
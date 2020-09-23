const mongoose = require("mongoose");
const db = require("../models");
const caveSeedAl = require('../seed/ACS 2016.json');

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/trip-report"
);




const tripSeed = [{
    tripId: "AJK691",
    tripName: "Vahalla Survey Trip",
    people: ["Alan Grosse", "Joy Palmer", "Elliot Stahl"],
    type: "survey",
    lat: "34.838257106021047",
    long: "-86.009409930557013",
    description: "Mapped some cave",
    image: "url",
    date: "03/19/2016",
    
},{
  tripId: "AJK197",
  tripName: "Neversink Pit",
  people: ["Alan Grosse", "Joy Palmer", "Elliot Stahl"],
  type: "vertical",
  lat: "34.804757824167609",
  long: "-86.004965426400304",
  description: "Pit bounce",
  image: "url",
  date: "05/19/2015",
  
},{
  tripId: "AJK379",
  tripName: "Montague Cave Trip",
  people: ["Alan Grosse", "Joy Palmer", "Elliot Stahl"],
  type: "horizontal",
  lat: "34.968365365639329",
  long: "-85.801903512328863",
  description: "Photo trip",
  image: "url",
  date: "07/23/2015",
  
}]

db.Trip
  .remove({})
  .then(() => db.Trip.collection.insertMany(tripSeed))
  .then(data => {
    console.log("records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.CaveAl
  .remove()
  .then(() => 
  db.CaveAl.collection.insertMany(caveSeedAl))
    .then(data => {
      console.log(data.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
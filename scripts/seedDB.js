const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/trip-report"
);

var id = mongoose.Types.ObjectId();


const tripSeed = {
    _id: id,
    tripName: "Trip to the best place ever",
    people: ["Alan Grosse", "Joy Palmer"],
    type: "survey",
    lat: "34.02",
    long: "-84.02",
    description: "We did stuuf and mapped some cave",
    image: "url",
    date: "07/19/2020",
}

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

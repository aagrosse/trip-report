const router = require("express").Router();
const tripController = require("../../controllers/tripController");


router
.route("/")
.get(tripController.findAll)
.put(tripController.update)
.post(tripController.create);

router
.route("/:id")
.get(tripController.findById)

router
.route("/userId/:id")
.get(tripController.findByUserId)

module.exports = router
const router = require("express").Router();
const caveAlController = require("../../controllers/caveAlController");


router
.route("/")
.get(caveAlController.findAll)
.put(caveAlController.update)
.post(caveAlController.create)



router
.route("/:id")
.get(caveAlController.findById)
.delete(caveAlController.remove)
.put(caveAlController.update)



module.exports = router
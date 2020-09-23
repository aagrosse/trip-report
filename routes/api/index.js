const router = require("express").Router();
const tripRoutes = require("./trip");
const caveAlRoutes = require("./caveal");

// Book routes
router.use("/trip", tripRoutes);
router.use("/caveal", caveAlRoutes);



module.exports = router;
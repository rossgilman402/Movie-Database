const router = require("express").Router();
const apiRoutes = require("./api/index");
const htmlRoutes = require("./htmlRoutes/index");

//HTML Routes
router.use("/htmlRoutes", htmlRoutes);

//API Routes
router.use("/api", apiRoutes);

module.exports = router;

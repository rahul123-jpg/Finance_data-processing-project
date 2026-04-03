const express = require("express");
const router = express.Router();

const { getSummary } = require("../controllers/dashboardController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// analyst + admin
router.get("/summary", auth, role(["analyst", "admin"]), getSummary);

module.exports = router;
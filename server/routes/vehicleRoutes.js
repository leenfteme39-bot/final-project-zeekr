
const express = require("express");

const router = express.Router();

const {
  getAllVehicles,
} = require("../controllers/vehicleController");

router.get("/", getAllVehicles);

module.exports = router;


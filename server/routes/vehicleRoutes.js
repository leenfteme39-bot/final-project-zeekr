// כתובת , אם למשל יש לי כתובת /api/vehicles  , getAllVehicles השרת מפעיל 

const express = require("express");

const router = express.Router();

const {
  getAllVehicles,
} = require("../controllers/vehicleController");

router.get("/", getAllVehicles);

module.exports = router;


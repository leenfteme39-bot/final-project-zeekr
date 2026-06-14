
const Vehicle = require("../models/Vehicle");

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();

    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching vehicles",
      error: error.message,
    });
  }
};

module.exports = { getAllVehicles };
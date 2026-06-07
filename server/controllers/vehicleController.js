// כשמשיהוא מבקש רכב , הוא אומר לך ל MONGODB , תביא את כל הרכבים , תחזיר אותם ללקוח
// get->api->vehicles
const Vehicle = require("../models/Vehicle");

// קבלת כל הרכבים
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
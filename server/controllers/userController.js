const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { phone, carNumber } = req.body;

    const newUser = new User({
      phone,
      carNumber,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};

module.exports = { createUser };
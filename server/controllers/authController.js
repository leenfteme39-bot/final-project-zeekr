const User = require("../models/User");

const loginUser = async (req, res) => {
  try {
    const { phone, carNumber } = req.body;

    const user = await User.findOne({ phone, carNumber });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login error",
      error: error.message,
    });
  }
};

module.exports = { loginUser };
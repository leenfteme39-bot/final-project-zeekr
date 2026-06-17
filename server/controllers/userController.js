const User = require("../models/User");
const { sendWelcomeEmail } = require("../services/email");

const loginUser = async (req, res) => {
  try {
    const { phone, carNumber } = req.body;
    let user = await User.findOne({ phone });

    if (user) {
      user.carNumber = carNumber;
      await user.save();

      return res.json({
        message: "User exists",
        user,
        redirect: "home",
      });
    }

    const newUser = await User.create({ phone, carNumber });

    return res.status(201).json({
      message: "New user created",
      user: newUser,
      redirect: "enrollment",
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    if (user.email) {
      await sendWelcomeEmail(user.email);
    }

    res.status(201).json({
      message: "User created successfully",
      user,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { phone, ...data } = req.body;

    const user = await User.findOneAndUpdate(
      { phone },
      { $set: data },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
  createUser,
  updateUser
};
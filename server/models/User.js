const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  idNumber: {
    type: String,
    required: true,
  },

  birthDate: {
    type: String,
  },

  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },

  city: {
    type: String,
  },

  street: {
    type: String,
  },

  houseNumber: {
    type: String,
  },

  carNumber: {
    type: String,
  },

  licenseImage: {
    type: String, // URL מ-Firebase בהמשך
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
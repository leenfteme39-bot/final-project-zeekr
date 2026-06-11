const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },

  lastName: {
    type: String,

  },

  idNumber: {
    type: String,
    
  },

  birthDate: {
    type: String,
  },

  phone: {
    type: String,
    
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

const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  shortDescription: {
    type: String,
  },

  imageUrl: {
    type: String,
  },

  price: {
    type: Number,
  },

  category: {
    type: String,
  },

  features: [String],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB
const connectDB = require("./config/db");
connectDB();

// routes
const vehicleRoutes = require("./routes/vehicleRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/vehicles", vehicleRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Zeeker Server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
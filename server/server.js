//יצירת שרת 
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// חיבור שרת 
const vehicleRoutes = require("./routes/vehicleRoutes");
console.log("vehicleRoutes =", vehicleRoutes);

dotenv.config();

const connectDB = require("./config/db");

const app = express();
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);
app.use(cors());
//מאפשר קבלת ניתונים מהפרונט
app.use(express.json());

//חיבור ל מונגו DB
connectDB();

// שרת
app.use("/api/vehicles", vehicleRoutes);

app.get("/", (req, res) => {
  res.send("Zeeker Server is running ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
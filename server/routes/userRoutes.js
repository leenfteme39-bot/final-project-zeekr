const express = require("express");
const router = express.Router();

const {
  loginUser,
  createUser,
  updateUser
} = require("../controllers/userController");

// התחברות
router.post("/login", loginUser);

// הרשמה מלאה 
router.post("/", createUser);

// עדכון משתמש (כפתור קדימה בסוף enrollment)
router.put("/update", updateUser);

module.exports = router;
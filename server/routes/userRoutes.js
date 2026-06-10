const express = require("express");
const router = express.Router();

const { createUser, loginUser} = require("../controllers/userController");

// הרשמה 
router.post("/", createUser);
// התחברות
router.post("/login", loginUser);
module.exports = router;

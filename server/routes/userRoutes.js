const express = require("express");
const router = express.Router();

const {
  loginUser,
  createUser,
  updateUser,
} = require("../controllers/userController");

router.post("/login", loginUser);
router.post("/", createUser);
router.put("/update", updateUser);

module.exports = router;
const express = require("express");
const router = express.Router();

const User = require("../models/users");

router.get("/", async (req, res) => {
  const users = await User.all;
  res.json(users);
});

module.exports = router;

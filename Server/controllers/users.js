const express = require("express");
const router = express.Router();

const User = require("../models/Users");

router.get("/", async (req, res) => {
  try {
    const users = await User.all;
    res.json(users);
  } catch (err) {
    res.status(400).send({ err });
  }
});


module.exports = router;

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/Users");

router.get("/", async (req, res) => {
  try {
    const users = await User.all;
    res.json(users);
  } catch (err) {
    res.status(400).send({ err });
  }
});

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await User.findByEmail(req.body.email);
    if (user.rows.length) {
      return res
        .status(400)
        .json({ email: "A user is already registered with that email" });
    } else {
      const newUser = await User.create(
        req.body.username,
        req.body.email,
        hashedPassword
      );
      res.status(201).json({ msg: "User created" });
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

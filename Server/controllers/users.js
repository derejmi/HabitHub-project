const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //we then look up the user by that email
  //we verify that they have the right password using bcrypt
  try {
    const result = await User.findByEmail(email);
    const user = result.rows[0];
    if (!result.rows.length) {
      throw new Error("No user with this email");
    }
    //check the client has provided the correct password for this user
    const isMatch = await bcrypt.compare(password, user.password);
    if (!!isMatch) {
      const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
      };
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token,
        });
      });
      // res.status(200).json({ user });
    } else {
      throw new Error("User could not be authenticated, password is incorrect");
    }
  } catch (err) {
    res.status(401).json({ msg: `${err}` });
  }
});

module.exports = router;

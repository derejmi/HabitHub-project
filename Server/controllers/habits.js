const express = require("express");
const router = express.Router();

const Habit = require("../models/habits");

router.get("/", async (req, res) => {
  try {
    const habits = await Habit.all;
    res.json(habits);
  } catch (err) {
    res.status(400).send({ err });
  }
});

module.exports = router;
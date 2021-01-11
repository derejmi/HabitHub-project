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

router.post('/', async (req, res) => {
    try {
      const newHabit = await Habit.create(
          req.body.name, 
          req.body.updated_date, 
          req.body.frequency, 
          req.body.due_date
          );
      res.status(200).json(newHabit)
    } catch(err){
        res.status(404).json({err})
    }
  })
  

module.exports = router;
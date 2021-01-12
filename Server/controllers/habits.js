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

router.get('/:id', async (req, res) => {
  try {
    const shabit = await Habit.findBy(parseInt(req.params.id))
    res.json(shabit)
  } catch(err) {
    res.status(404).json({err})
  }
})

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


// router.patch('/:id', async (res, rej) => {
//   try{
//     const habit = await Habit.findBy(parseInt(req.params.id));
//     const updateHabit = await habit.updateName(req.body.name, req.body.updated_date, req.body.frequency, req.body.due_date)
//     res.json({habit: updateHabit})
//   } catch (err) {
//     rej.status(404).json({err})

//   }
// })


router.delete('/:id', async (req, res) => {
  try {
    const delHab = await Habit.findBy(parseInt(req.params.id))
    await delHab.destroy()
    res.status(204).json("deleted")

  } catch(err) {
    res.status(500).json({err})
  }
})




module.exports = router;
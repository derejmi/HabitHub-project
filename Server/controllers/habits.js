const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

const Habit = require("../models/habits");

router.get("/",
 passport.authenticate("jwt", { session: false }),
 async (req, res) => {
  try {
    
    const habits = await Habit.getById(req.user.id);
    console.log(habits,"-----------------------------------------------------------------")
    res.json(habits);
  } catch (err) {
    res.status(400).send({ err });
  }
});

router.get('/:id',
passport.authenticate("jwt", { session: false }),
async (req, res) => {
  try {
    uid = req.user.id
    rid = parseInt(req.params.id)
    const shabit = await Habit.findBy(rid,uid)
    res.json(shabit)
  } catch(err) {
    res.status(404).json({err})
  }
})

router.post('/',
passport.authenticate("jwt", { session: false }),
async (req, res) => {
    try {
      const newHabit = await Habit.create(
          req.body.name, 
          req.body.updated_date, 
          req.user.id);
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
router.patch('/:id',
passport.authenticate("jwt", { session: false }),
async (req, res) => {
  try {
    uid = req.user.id
    rid = parseInt(req.params.id)
      const streak = await Habit.findBy(rid,uid)
      const updateStreak = await streak.update(req.body.streak)
      res.json({streak: updateStreak})
  } catch(err) {
      res.status(500).json({err})
  }
})


// router.delete('/:id',
// passport.authenticate("jwt", { session: false }),

// async (req, res) => {
//   try {
    
//     rid = parseInt(req.params.id)
//     uid = req.user.id
//     // const delHab = await Habit.findBy(
//     const del = await Habit.destroy(rid, uid)
    
//     res.status(204).json()

//   } catch(err) {
//     res.status(500).json({err})
//   }
// })
router.delete('/:id',
passport.authenticate("jwt", { session: false }),
async (req, res) => {
  try {
    uid = req.user.id
    rid = parseInt(req.params.id)
    const delHab = await Habit.findBy(rid,uid)
    await delHab.destroy()
    res.status(204).json("deleted")

  } catch(err) {
    res.status(500).json({err})
  }
})





module.exports = router;
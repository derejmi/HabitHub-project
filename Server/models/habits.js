const db = require ('../db/config')
const SQL = require('sql-template-strings');
const router = require('../controllers/users');


class Habit {
    constructor(data){
        this.name = data.name
        this.updated_date = data.updated_date
        this.frequency = data.frequency,
        this.due_date = data.due_date,
        this.streak = data.streak
    }



    static get all() {
        return new Promise(async (res, rej) => {
          try {
            console.log("Hi");
            let q = await db.run(SQL`SELECT * FROM habits;`);
            console.log(q);
            let habit = q.rows.map((f) => new Habit(f));
            res(habit);
          } catch (err) {
            rej(`Error getting habit: ${err}`);
          }
        });
      }
}
module.exports = Habit;
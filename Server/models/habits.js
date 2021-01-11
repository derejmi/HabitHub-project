const db = require ('../db/config')
const SQL = require('sql-template-strings');
const router = require('../controllers/users');


class Habit {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.updated_date = data.updated_date;
        this.frequency = data.frequency;
        this.due_date = data.due_date;
        
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

      static create( name, updated_date, frequency, due_date) {
        return new Promise(async (res, rej) => {
          try {
            let qt = await db.run(SQL`INSERT INTO habits (name, updated_date, frequency, due_date)
                  VALUES (${name},${updated_date}, ${frequency}, ${due_date}) RETURNING *;`);
            let newHabit = new Habit(qt.rows[0]);
            res(newHabit);
          } catch (err) {
            rej(`Error makign user ${err}`);
          }
        });
      }

      static findBy (id) {
        return new Promise(async (res, rej) => {
          try{
            const habitData = await db.run(SQL`SELECT * FROM habits where id = ${id};`);
            let habitById = new Habit(habitData.rows[0]);
            res(habitById);
          } catch(err) {
            rej("Id invalid, habit not found")
          }
        })
      }
}
module.exports = Habit;
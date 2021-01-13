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
        this.users_id = data.users_id
        
    }



    static getById(id) {
        return new Promise(async (res, rej) => {
          try {
            console.log("Hi");
            let q = await db.run(SQL`SELECT * FROM habits WHERE users_id = ${id};`);
            console.log(q);
            let habit = q.rows.map((f) => new Habit(f));
            res(habit);
          } catch (err) {
            rej(`Error getting habit: ${err}`);
          }
        });
      }

      static create( name, updated_date, frequency, due_date, users_id) {
        return new Promise(async (res, rej) => {
          try {
            let qt = await db.run(SQL`INSERT INTO habits (name, updated_date, frequency, due_date, users_id)
                  VALUES (${name},${updated_date}, ${frequency}, ${due_date}, ${users_id}) RETURNING *;`);
            let newHabit = new Habit(qt.rows[0]);
            res(newHabit);
          } catch (err) {
            rej(`Error makign user ${err}`);
          }
        });
      }

      static findBy (id, users_id) {
        return new Promise(async (res, rej) => {
          try{
            const habitData = await db.run(SQL`SELECT * FROM habits WHERE id = ${id} AND users_id = ${users_id};`);
            let habitById = new Habit(habitData.rows[0]);
            res(habitById);
          } catch(err) {
            rej("Id invalid, habit not found")
          }
        })
      }


      // updateFreq(){
      //   return new Promise(async (res, rej) => {
      //     try {
      //       let updatedFreqData = await db.run(SQL`UPDATE habits SET frequency = ${this.frequency} WHERE id = ${this.id} RETRUNING *;`);
      //       let updatedFreq = new Habit(updatedFreqData.rows[0])
      //       res(updatedFreq)

      //     } catch(err) {
      //       rej('Could not update freq')
      //     }
      //   })
      // } 

      // updatedName(){
      //   return new Promise(async (res, rej) => {
      //     try {
      //       let updatedNameData = await db.run(SQL`UPDATE habits SET name = ${this.name} WHERE id = ${this.id} RETURNING *;`);
      //       let updateName = new Habit(updatedNameData.rows[0])  
      //       res(updateName)
      //     } catch(err) {
      //       rej('could not update the habit')
      //     }
      //   })
      // }

      // destroy(id, users_id){
      //   return new Promise(async(resolve, reject) => {
      //     try{
      //       console.log("long message -----------------------------------------------------------------------------------")
      //       const del = await db.run(SQL`DELETE FROM habits WHERE id = ${id} AND users_id = ${users_id};`);
      //       console.log(del)
      //       resolve("deleted")
      //     } catch (err) {
      //       reject('Could not delete habit')
      //     }
      //   })
      // }
      destroy(){
        return new Promise(async(resolve, reject) => {
          try{
            await db.run(SQL`DELETE FROM habits WHERE id = ${this.id};`);
            resolve("Habits deleted")
          } catch (err) {
            reject('Could not delete habit')
          }
        })
      }

    
      





}





module.exports = Habit;
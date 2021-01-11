const db = require ('../db/config')
const SQL = require('sql-template-strings');


class Habit {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.updated_date = data.updated_date
        this.frequency = data.frequency,
        this.due_date = data.due_date,
        this.streak = data.streak,
        
    }
}
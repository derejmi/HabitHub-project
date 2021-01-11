const db = require("../db/config");
const SQL = require("sql-template-strings");

class User {
  constructor(data) {
    this.user = data.user;
    this.password = user.password;
  }

  static get all() {
    return new Promise(async (res, rej) => {
      try {
        let q = await db.run(SQL`SELECT * FROM users;`);
        let users = q.rows.map((f) => new User(f));
        res(users);
      } catch (err) {
        rej(`Error getting users: ${err}`);
      }
    });
  }

  static create({ username, user_password}){
      return new Promise(async (res, rej) => {
          try{
              let qt = await db.run(SQL`INSERT INTO users (username, user_password))
              VALUES (${username}, ${user_password}) RETURNING *;`);
              let user = new User(qt.rows[0])
              res(user)
          } catch (err)
            rej(`Error makign user ${err}`)
      })
  }









}

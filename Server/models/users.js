const db = require("../db/config");
const SQL = require("sql-template-strings");

class User {
  constructor(data) {
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
  }

  static get all() {
    return new Promise(async (res, rej) => {
      try {
        console.log("Hi");
        let q = await db.run(SQL`SELECT * FROM users;`);
        console.log(q);
        let users = q.rows.map((f) => new User(f));
        res(users);
      } catch (err) {
        rej(`Error getting users: ${err}`);
      }
    });
  }

  static create({ username, email, user_password }) {
    return new Promise(async (res, rej) => {
      try {
        let qt = await db.run(SQL`INSERT INTO users (username, user_password))
              VALUES (${username},${email}, ${user_password}) RETURNING *;`);
        let user = new User(qt.rows[0]);
        res(user);
      } catch (err) {
        rej(`Error makign user ${err}`);
      }
    });
  }
}

module.exports = User;

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
        let q = await db.run(SQL`SELECT * FROM users;`);
        let users = q.rows.map((f) => new User(f));
        res(users);
      } catch (err) {
        rej(`Error getting users: ${err}`);
      }
    });
  }

  static create(username, email, password) {
    return new Promise(async (res, rej) => {
      try {
        const userData = await db.run(SQL`INSERT INTO users (username, email, password)
              VALUES (${username},${email}, ${password}) RETURNING *;`);
        console.log(userData);
        let user = new User(userData.rows[0]);
        console.log(user, "newUser");
        res(user);
      } catch (err) {
        rej(`Error making user ${err}`);
      }
    });
  }

  static findByEmail(email) {
    return new Promise(async (res, rej) => {
      try {
        let result = await db.run(SQL`SELECT * FROM users
                                                WHERE email = ${email};`);
        res(result);
      } catch (err) {
        rej(`Error retrieving user: ${err}`);
      }
    });
  }
}

module.exports = User;

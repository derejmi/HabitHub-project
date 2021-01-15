const { Pool } = require("pg");

// const pool = new Pool({ database: "habithub" });
const config = {
  production: { 
      database: 'habithub',
  },
  test: {
      database: 'habit_test'
  }
}
const pool = new Pool(config[process.env.NODE_ENV]);

function run(q, values, callback) {
  return pool.query(q, values, callback);
}

module.exports = { run };

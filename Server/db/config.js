const { Pool } = require("pg");


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

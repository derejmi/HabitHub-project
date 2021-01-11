const { Pool } = require("pg");

// const pool = new Pool({ database:  }); UNCOMMENT WHEN DB NAME IS SORTED

function run(q, values, callback) {
  return pool.query(q, values, callback);
}

module.exports = { run };

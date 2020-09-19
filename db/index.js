require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

let pool;

if (isProduction) {
  const connectionString = process.env.DB_CONNECTION;

  pool = new Pool({
    connectionString: connectionString,
  });
} else {
  pool = new Pool({
    ssl: false,
  });
}

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

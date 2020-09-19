require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

let pool;

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DB_CONNECTION,
  });
} else {
  pool = new Pool();
}

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

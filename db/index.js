require("dotenv").config();

const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  ssl: isProduction,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
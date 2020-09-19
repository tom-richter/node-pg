const express = require("express");
const app = express();
const db = require("./db");

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
 }); 

app.get("/foods", (req, res) => {
  console.log('PORT =', process.env.PORT)
  console.log('PGUSER =', process.env.PGUSER)
  console.log('PGPASSWORD =', process.env.PGPASSWORD)
  console.log('PGHOST =', process.env.PGHOST)
  console.log('PGPORT =', process.env.PGPORT)
  console.log('PGDATABASE =', process.env.PGDATABASE)
  console.log('NODE_ENV =', process.env.NODE_ENV)
  console.log('DB_CONNECTION =', process.env.DB_CONNECTION)
  db.query(`SELECT * FROM foods`)
    .then((result) => res.send(result.rows))
    .catch((e) => console.log(e));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
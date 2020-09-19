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
  db.query(`SELECT * FROM foods`)
    .then((result) => res.send(result.rows))
    .catch((e) => console.log(e));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
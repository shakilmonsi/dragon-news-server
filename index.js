const express = require("express");
const app = express();
// class 6 add ,;;;;;;;;;;;;;;;;;;;;,,,,,,,,,,,,,,,,,,,,,,;
const cors = require("cors");
app.use(cors());
const port = process.env.POV || 5000;
const categories = require("./data/categories.json");

app.get("/news/categories", (req, res) => {
  res.send(categories);
});

app.get("/", (req, res) => {
  res.send("News ApI running");
});
app.listen(port, () => {
  console.log(`Example app listening on port `, port);
});

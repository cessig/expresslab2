const express = require("express");
const app = express();
const PORT = 3000;

const robots = require("./models/robots");

//NEW
app.get("/robots/new", (req, res) => {
  res.render("new.ejs");
});

//INDEX
app.get("/robots", (req, res) => {
  res.render("index.ejs", { robots: robots });
});

//SHOW

app.get("/robots/:botIndex", (req, res) => {
  res.render("show.ejs", { oneBot: robots[req.params.botIndex] });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 3000;

const robots = require("./models/robots");

//INDEX
app.get("/robots", (req, res) => {
  res.render("index.ejs", { robots: robots });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

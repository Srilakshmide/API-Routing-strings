const express = require("express");
const app = express();

app.get("/", (require, response) => {
  response.send("Home Page");
});

app.get("/about", (require, response) => {
  response.send("About Page");
});

app.listen(3000);

module.exports = app;

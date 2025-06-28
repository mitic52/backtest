const expresss = require("express");
const app = expresss();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/route", (req, res) => {
  res.send("You just found a route!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

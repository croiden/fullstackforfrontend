const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! by Lawrence");
});
app.get("/demo", (req, res) => {
  res.set("X-full-stack", "4life"); // custom header
  res.status(418);
  res.send("I prefer coffee...!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

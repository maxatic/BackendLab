const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use("/", require(path.join(__dirname, "routes", "home")));
app.use("/about", require(path.join(__dirname, "routes", "about")));
app.use("/features", require(path.join(__dirname, "routes", "features")));
app.use("/logo", require(path.join(__dirname, "routes", "logo")));
app.use("/favicon", require(path.join(__dirname, "routes", "favicon")));
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);

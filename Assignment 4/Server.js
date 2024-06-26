const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// Set up pug as view engine
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", require("./Routes/Router"));

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});

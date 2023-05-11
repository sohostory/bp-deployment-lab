const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.static(`${__dirname}/public`));

const { ROLLBAR_ACCESS_TOKEN } = process.env;

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get("/word", (req, res) => {
  rollbar.info("the user got a word");
  res.status(200).send("word");
});
app.listen(4000, () => console.log(`server running on 4000`));

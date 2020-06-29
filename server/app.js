// imports
const path = require('path');
const express = require('express');
const volleyball = require("volleyball");
const app = express();

const db = require("./models/_db");

// middleware
// logging and body-parsing
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve dynamic routes
app.use("/api", require("./routes"));

// You'll of course want static middleware so your browser can request things
// like your 'index.html' and 'bundle.js'.

// This is static-serving middleware, serving up files from the /public directory.
app.use(express.static(path.join(__dirname, '..', 'public')));

// other routes go below

// This is error-handling middleware
app.use(function (req, res, next) {
  var err = new Error("Not Found!");
  err.status = 404;
  next(err); // forwards errors to the error-handling route
});

// handle all errors (anything passed into `next()`)
app.use(function (err, req, res, next) {
  res.status(err.status || 500); // 500 refers to a general, non-specific error
  console.error(err);
  res.send(
    `Something went Wrong! ` + err.message // for now
  );
});

// listen on a port
const port = 3000;

app.listen(port, async () => {
  console.log("The server is listening closely on port", port);
  try {
    await db.sync();
    console.log("Synchronated the database");
  } catch (err) {
    console.error("Trouble right here in River City", err, err.stack);
  }
});

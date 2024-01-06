"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters.
//? Last parameter is for next().

//next() for next Function

app.get("/", (req, res, next) => {
  next();
  res.send({
    message: "Middleware running",
  });
});

app.get("/", (req, res) => {
  res.send({
    message: " Welcome",
  });
});

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

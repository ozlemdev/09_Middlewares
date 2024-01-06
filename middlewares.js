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

// Midddleware:

app.get("/", (req, res, next) => {
  req.customData = "Custom Data";
  res.customDataInResponse = "Custom Data In Response";
  next(); //Go to next Function.

  //next() çalıştığı için çıktı vermeyecek.
  res.send({
    message: "Middleware running",
  });
});

app.get("/", (req, res) => {
  res.send({
    customData: [req.customData, res.customDataInResponse],
    message: " Welcome",
  });
});

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

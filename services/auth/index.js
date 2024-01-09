// calling the packages
const express = require("express");
const database = require("../../pkg/database/index");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// calling the handlers
const authHandler = require("./handlers/authHandler");

// initial the app
const app = express();

// calling the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());

// function for connecting with the database
database.init();

//routes for signup and login
app.post("/api/auth/signup", authHandler.signup);
app.post("/api/auth/login", authHandler.login);

app.listen(process.env.PORTAUTH, (err) => {
  if (err) {
    return console.log("Couldn't start the service.");
  }
  console.log(`Service started successfully on port ${process.env.PORTAUTH}`);
});

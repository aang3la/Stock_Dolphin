// calling the packages
const express = require("express");
const database = require("../../pkg/database/index");
const jwt = require("express-jwt");
const cookieParser = require("cookie-parser");

// calling the handlers
const authHandler = require("./handlers/authHandler");

// initial the app
const app = express();

// calling the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// function for connecting with the database
database.init();

// implementing jwt
app.use(
  jwt
    .expressjwt({
      algorithms: ["HS256"],
      secret: process.env.JWT_SECRET,
      getToken: (req) => {
        if (
          req.headers.authorization &&
          req.headers.authorization.split(" ")[0] === "Bearer"
        ) {
          return req.headers.authorization.split(" ")[1];
        }
        if (req.cookies.jwt) {
          return req.cookies.jwt;
        }
        return null;
      },
    })
    .unless({
      path: ["/api/auth/signup", "/api/auth/login"],
    })
);

//routes for signup and login
app.post("/api/auth/signup", authHandler.signup);
app.post("/api/auth/login", authHandler.login);

app.listen(process.env.PORTAUTH, (err) => {
  if (err) {
    return console.log("Couldn't start the service.");
  }
  console.log(`Service started successfully on port ${process.env.PORTAUTH}`);
});
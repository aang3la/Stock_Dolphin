const express = require("express");
const items = require("./handlers/itemsHandler");
const database = require("../../pkg/database/index");

const cors = require("cors");
const jwt = require("express-jwt");

const app = express();

database.init();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(jwt.expressjwt({
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
        path: [],
      })
  );

// Routes
app.get("/inventory/:categoryName", items.getAllItems);
app.get("/inventory/:categoryName/:id", items.getOneItem);
app.post("/inventory/:categoryName", items.uploadItemImage, items.createItem);
app.patch(
  "/inventory/:categoryName/:id",
  items.uploadItemImage,
  items.updateItem
);
app.delete("/inventory/:categoryName/:id", items.deleteItem);

app.listen(process.env.PORT_ITEMS, (err) => {
  if (err) {
    console.log("Could not start service");
  }
  console.log(`Service started successfully on port ${process.env.PORT_ITEMS}`);
});

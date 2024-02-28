const express = require('express');
const orders = require("./handlers/ordersHandler");
const database = require("../../pkg/database/index");

const cors = require('cors');
const jwt = require('express-jwt');

const app = express();

database.init();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use(jwt.expressjwt({
//     algorithms: ["HS256"],
//     secret: process.env.JWT_SECRET,
//     getToken: (req) => {
//       if (
//         req.headers.authorization &&
//         req.headers.authorization.split(" ")[0] === "Bearer"
//       ) {
//         return req.headers.authorization.split(" ")[1];
//       }
//       if (req.cookies.jwt) {
//         return req.cookies.jwt;
//       }
//       return null;
//     },
//   })
//   .unless({
//     path: [],
// }));

// Routes
app.get("/orders", orders.getAllOrders2);
app.get("/inventory/:categoryName/:itemName", orders.getAllOrders);
app.get("/inventory/:categoryName/:itemName/:id", orders.getOneOrder);
app.post("/inventory/:categoryName/:itemName", orders.createOrder);
app.patch("/inventory/:categoryName/:itemName/:id", orders.updateOrder);
app.delete("/inventory/:categoryName/:itemName/:id", orders.deleteOrder);

app.listen(process.env.PORT_ORDERS, (err) => {
    if(err) {
        console.log('Could not start service')
    }
    console.log(`Service started successfully on port ${process.env.PORT_ORDERS}`)
});
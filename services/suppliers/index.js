const express = require('express');
const suppliers = require("./handlers/suppliersHandler");
const database = require("../../pkg/database/index");

const cors = require('cors');
const jwt = require('express-jwt');

const app = express();

database.init();
app.use(express.json());
app.use(cors());

// app.use(jwt.expressjwt({
//     algorithms: ["HS256"],
//     secret: process.env.JWT_SECRET,
//     getToken: (req) => {
//         if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer"){
//             return req.headers.authorization.split(" ")[1];
//         }
//         if(req.cookies.jwt){
//             return req.cookies.jwt;
//         }
//         return null; 
//     },
//     })
//     .unless({
//         path: []
//     })
// );

// Routes
app.get("/suppliers", suppliers.getAllSuppliers);
app.get("/suppliers/:id", suppliers.getOneSupplier);
app.post("/suppliers", suppliers.createSupplier);
app.patch("/suppliers/:id", suppliers.updateSupplier);
app.delete("/suppliers/:id", suppliers.deleteSupplier);

app.listen(process.env.PORT_SUPPLIERS, (err) => {
    if(err) {
        console.log('Could not start service')
    }
    console.log(`Service started successfully on port ${process.env.PORT_SUPPLIERS}`)
});
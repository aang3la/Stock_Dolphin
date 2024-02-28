const express = require("express");
const proxy = require("express-http-proxy");
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path: `${__dirname}/../config/config.env`});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
})); 


const authProxy = proxy("http://localhost:10000", {
    proxyReqPathResolver: (req) => {
        return `api/auth${req.url}`;
    }
});

const suppliersProxy = proxy("http://localhost:10001", {
    proxyReqPathResolver: (req) => {
        return `/suppliers${req.url}`;
    },
});

const categoryProxy = proxy("http://localhost:10005", {
    proxyReqPathResolver: (req) => {
        return `/inventory${req.url}`;
    },
});

const itemsProxy = proxy("http://localhost:10003", {
    proxyReqPathResolver: (req) => {
        return `/inventory/:categoryName${req.url}`;
    },
});

const ordersProxy = proxy("http://localhost:10004", {
    proxyReqPathResolver: (req) => {
        return `/inventory/:categoryName/:itemName${req.url}`;
    },
});

const activityProxy = proxy("http://localhost:10006", {
    proxyReqPathResolver: (req) => {
        return `/activities${req.url}`;
    },
});

app.use("/api/auth/", authProxy);
app.use("/suppliers", suppliersProxy);
app.use("/inventory/:categoryName", itemsProxy);
app.use("/inventory/", categoryProxy);
app.use("/inventory/:categoryName/:itemName", ordersProxy);
app.use("/activities/", activityProxy);

app.listen(process.env.PORTPROXY, (err) => {
    if(err) {
        return console.log("Couldn't start the service.");
    }
    console.log(`Service started successfully on port 10000`)
});
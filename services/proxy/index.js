const express = require("express");
const proxy = require("express-http-proxy");
const cors = require('cors');
// dotenv

const app = express();
app.use(cors()); // Cross-Origin Resource Sharing

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

const itemsProxy = proxy("http://localhost:10003", {
    proxyReqPathResolver: (req) => {
        return `/inventory/:categoryName${req.url}`;
    },
});

const categoryProxy = proxy("http://localhost:10003", {
    proxyReqPathResolver: (req) => {
        return `/inventory${req.url}`;
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
app.use("/suppliers/", suppliersProxy);
app.use("/inventory/:categoryName/", itemsProxy);
app.use("/inventory/", categoryProxy);
app.use("/inventory/:categoryName/:itemName/", ordersProxy);
app.use("/activities/", activityProxy);

app.listen(process.env.PORTPROXY, (err) => {
    if(err) {
        return console.log("Couldn't start the service.");
    }
    console.log(`Service started successfully on port ${process.env.PORTPROXY}`)
});
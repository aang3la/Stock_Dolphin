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

app.use("/api/auth/", authProxy);
app.use("/suppliers/", suppliersProxy);

app.listen(process.env.PORTPROXY, (err) => {
    if(err) {
        return console.log("Couldn't start the service.");
    }
    console.log(`Service started successfully on port ${process.env.PORTPROXY}`)
});
// const jwt = require("jsonwebtoken");

// function verifyToken(req, res, next) {
//   const token = req.headers["authorization"];
//   if (!token) {
//     return res.status(401).json({ message: "No token provided." });
//   }

//   jwt.verify(token, "JWT_SECRET", (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ message: "Failed to authenticate token." });
//     }

//     req.user = decoded;
//     next();
//   });
// }

// // Middleware to restrict access to admin role only
// function restrictToAdmin(req, res, next) {
//   if (req.user.role !== "admin") {
//     return res.status(403).json({ message: "Permission denied." });
//   }
//   next();
// }

// module.exports = { verifyToken, restrictToAdmin };

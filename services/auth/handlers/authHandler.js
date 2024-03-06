//* Handler for authentication

// connecting with the schema
const Users = require("../../../pkg/users/userSchema");

// packages
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const newUser = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      // role: req.body.role
    });

    const token = jwt.sign(
      { id: newUser._id, name: newUser.name, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      secure: false,
      httpOnly: true,
    });

    res.status(201).json({
      status: "success",
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // checking if the user entered info
    if (!email || !password) {
      return res.status(400).send("Please provide an email and password.");
    }

    // checking if the user exists
    const user = await Users.findOne({ email });

    if (!user)
      return res.status(400).send("This user with this email doesn't exist.");

    // compare passwords
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid)
      return res
        .status(400)
        .send("Invalid email or password. Please try again.");

    // if everything is correct, the token is generating
    const token = jwt.sign(
      { id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    // sending the cookie with the token
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      secure: false,
      httpOnly: true,
    });

    // sending the token
    res.status(201).json({
      status: "success",
      token,
      username: user.name
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};

// exports.restrict = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.auth.role)) {
//       return res.status(500).send('You dont have permission for this action.');
//     }
//     next();
//   };
// };

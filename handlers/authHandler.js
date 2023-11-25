//* Handler for authentication

// connecting with the schema
const Users = require("../pkg/users/userSchema");
const Administrator = require("../pkg/users/administratorSchema");

// packages
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async(req, res) => {
    try{
        // creating new user
        const newUser = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        // generating token
        const token = jwt.sign(
            {id: newUser._id, name: newUser.name},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES}
        );

        // sending the cookie with the token
        res.cookie("jwt", token, {
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                secure: false,
                httpOnly: true,
        });

        // sending the token
        res.status(201).json({
            status: "success",
            token,
            data: {
                user: newUser
            }
        });
    }catch(err){
        res.status(500).send(err);
    }
};

exports.login = async(req, res) => {
    try{
        const { email, password } = req.body;

        // checking if the user entered info
        if(!email || !password){
            return res.status(400).send("Please provide an email and password.")
        };

        // checking if the user exists
        const user = await Users.findOne({email});
        if(!user) return res.status(400).send("This user with this email doesn't exist.");

        // compare passwords
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if(!isPasswordValid) return res.status(400).send("Invalid email or password. Please try again.");

        // if everything is correct, the token is generating
        const token = jwt.sign(
            {id: user._id, name: user.name},
            process.env.JWT_SECRET,
            {expiresIn: proccess.env.JWT_EXPIRES0}
        );

        // sending the cookie with the token
        res.cookie("jwt", token, {
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                secure: false,
                httpOnly: true,
        });

        // sending the token
        res.status(201).json({
            status: "success",
            token
        });
    } catch(err){
        res.status(500).send("Internal server error");
    }
};

exports.adminLogin = async(req, res) => {
    try{
        const { username, password } = req.body;

        if(!username || !password){
            return res.status(400).send("Please provide an username and password.")
        };

        // const admin = await Administrator.findOne({username});
        // if(!admin) return res.status(400).send("This username doesn't exist.");

        const isPasswordValid = bcrypt.compareSync(password, admin.password);
        if(!isPasswordValid) return res.status(400).send("Invalid password. Please try again.");

        const token = jwt.sign(
            {id: admin._id, name: admin.username},
            process.env.JWT_SECRET,
            {expiresIn: proccess.env.JWT_EXPIRES0}
        );

        // sending the cookie with the token
        res.cookie("jwt", token, {
            expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                secure: false,
                httpOnly: true,
        });

        // sending the token
        res.status(201).json({
            status: "success",
            token
        });
    }catch(err){
        res.status(201).send(err);
    }
};
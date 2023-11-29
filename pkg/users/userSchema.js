const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "What's your name? This field is required."]
    },
    email: {
        type: String,
        required: [true, "E-mail is required."],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid email address."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [6, "Password must be at least 6 characters long."],
        validate: [validator.isStrongPassword, "Enter a combination of at least six numbers, letters or punctuation marks."]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
});

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
const mongoose = require("mongoose");
const validator = require("validator");

const administratorSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: [true, "This field is required."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [6, "Password must be at least 6 characters long."],
        validate: [validator.isStrongPassword, "Enter a combination of at least six numbers, letters or punctuation marks."]
    }
});

const Administrator = mongoose.model("Administrator", administratorSchema);
module.exports = Administrator;
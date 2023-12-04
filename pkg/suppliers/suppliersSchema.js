const mongoose = require("mongoose");
const validator = require("validator");

const suppliersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The field is required."]
    },
    address: {
        type: String,
        required: [true, "The  field is required."]
    },
    phone: {
        type: Number,
        required: [true, "The  field is required."]
    },
    email: {
        type: String, 
        required: [true, "Password is required."],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid email address."],
    }
});

const Suppliers = mongoose.model("Suppliers", suppliersSchema);
module.exports = Suppliers;
const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Suppliers',
    },
    quantity: {
        type: Number,
    },
    totalPrice: {
        type: Number
    },
    pricePerUnit: {
        type: Number
    },
    date: {
        type: Date
    }
});

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;
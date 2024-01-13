const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
    },
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
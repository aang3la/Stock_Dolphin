const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
    },
    supplierId: {
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
        type: Date,
        default: Date.now,
    }
});

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;
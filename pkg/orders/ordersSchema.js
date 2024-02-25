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
    itemName: {
        type: String,
    },
    supplierName: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
    },
    pricePerUnit: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

ordersSchema.pre('save', function(next) {
    this.totalPrice = this.quantity * this.pricePerUnit;
    next();
});

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;
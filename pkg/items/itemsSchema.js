const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "The field is required."]
    },
    image: {
        type: String
    },
    category: {
        enum: ["Office Supply", "Kitchen Supply", "Sanitary Supply"]
    }
});

const Items = mongoose.model("Items", itemsSchema);
module.exports = Items;
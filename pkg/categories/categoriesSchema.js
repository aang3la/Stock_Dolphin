const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "The field is required."]
    },       
    image: {
        type: String
    },
    items: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
    },
    totalPrice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
    }
});

const Categories = mongoose.model("Categories", categoriesSchema);
module.exports = Categories;
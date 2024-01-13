const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The field is required."],
  },
  image: {
    type: String,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Items",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  // totalPrice: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Items',
  // }
});

const Categories = mongoose.model("Categories", categoriesSchema);
module.exports = Categories;

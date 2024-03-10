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
  date: {
    type: Date,
    default: Date.now,
  },
});

const Categories = mongoose.model("Categories", categoriesSchema);
module.exports = Categories;

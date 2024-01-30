const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The field is required."],
  },
  image: {
    type: String,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: Number,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
    },
  ],
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activity",
  },
  // totalCost: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Orders",
  // },
});

const Items = mongoose.model("Items", itemsSchema);
module.exports = Items;

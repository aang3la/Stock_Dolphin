const Items = require("../../../pkg/items/itemsSchema");
const Categories = require("../../../pkg/categories/categoriesSchema");
const Activity = require("../../../pkg/activity/activitySchema");

// npm i multer
const multer = require("multer");
// npm i uuid
const uuid = require("uuid");

const imageId = uuid.v4();

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/images/items")
  },
  fileName: (req, file, callback) => {
    const ext = file.mimetype.split("/")[1];
    callback(null, `item-${imageId}-${Date.now()}.${ext}`);
  }
});

// Show all items
exports.getAllItems = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    const query = JSON.parse(queryString);

    const category = await Categories.findOne({
      title: req.params.categoryName,
    });
    if (!category) {
      res.status(408).json({
        status: "fail",
        message: "category not found " + req.params.categoryName,
      });
    }

    const items = await Items.find({ categoryId: category._id });

    res.status(200).json({
      status: "success",
      data: items,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Show one item
exports.getOneItem = async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: item,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Create item
exports.createItem = async (req, res) => {
  try {
    const { name, image } = req.body;

    const category = await Categories.findOne({
      title: req.params.categoryName
    });

    const newItem = await Items.create({
      name,
      image,
      categoryId: category._id,
    });

    const newActivity = await Activity.create({
      action: "created",
      itemName: newItem.name,
      itemId: newItem._id,
      date: new Date(),
    });

    await Categories.findByIdAndUpdate(category._id, {
      $push: { items: newItem },
    });

    res.status(200).json({
      status: "success",
      data: {
        newItem,
        newActivity
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Make changes in a item
exports.updateItem = async (req, res) => {
  try {
    const { name, categoryId } = req.body;

    const item = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    const newActivity = await Activity.create({
      action: "edited",
      itemName: item.name,
      itemId: item._id,
      date: new Date(),
    });

    res.status(201).json({
      status: "success",
      data: {
        item,
        newActivity
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete item
exports.deleteItem = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    const item = await Items.findByIdAndDelete(req.params.id);

    const newActivity = await Activity.create({
      action: "deleted",
      itemName: item.name,
      itemId: item._id,
      date: new Date(),
    });

    res.status(201).json({
      status: "success",
      data: {
        item: null,
        activity: newActivity
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const Items = require("../../../pkg/items/itemsSchema");
const Category = require("../../../pkg/categories/categoriesSchema");
const Categories = require("../../../pkg/categories/categoriesSchema");
// const Activity = require("../../../pkg/activity/activitySchema");

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
    const { name, image, categoryId } = req.body;

    const newItem = await Items.create({
      name,
      image,
      categoryId,
    });

    // const newActivity = new Activity({
    //   activity: "created",
    //   item: name,
    // });
    // await newActivity.save();

    await Category.findByIdAndUpdate(categoryId, {
      $push: { items: newItem },
    });

    res.status(200).json({
      status: "success",
      data: newItem,
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
    const item = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
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

// Delete item
exports.deleteItem = async (req, res) => {
  try {
    await Items.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

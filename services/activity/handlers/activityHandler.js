const Activity = require("../../../pkg/activity/activitySchema");
const Items = require("../../../pkg/items/itemsSchema");

exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();

    res.status(200).json({
      status: "success",
      data: activities,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: activity,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createActivity = async (req, res) => {
  try {
    const { itemId } = req.body;
    const item = await Items.findById(itemId);

    const newActivity = await Activity.create({
      itemId,
      itemName: item.name,
      date: new Date(),
    });

    res.status(200).json({
      status: "success",
      data: newActivity,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

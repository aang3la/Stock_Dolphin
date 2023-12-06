const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    itemID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
    },
    activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    }
    // tuka da se zemat i od databaza created, deleted, moved.. **ref: User
});

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    action: {
        type: String,
        required: true,
        enum: ["moved", "edited", "deleted", "created", "ordered"],
        default: "created"
    },
    date: {
        type: Date,
        default: Date.now,
    },
    items: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Items',
    },
});

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
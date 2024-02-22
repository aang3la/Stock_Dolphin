import "./activityItem.css";
const moment = require("moment");

const ActivityItem = ({ activity, dashboard }) => {
  const formattedDate = moment(activity.date).format("MM/DD/YYYY HH:mm");

  return (
    <div className={`activity-line ${dashboard ? "dashboard-activity" : ""}`}>
      <p>
        Admin has {activity.action} item <b>{activity.itemName}</b> in <b>{activity.categoryName}</b>
      </p>
      {!dashboard && <p>{formattedDate}</p>}
    </div>
  );
};

export default ActivityItem;

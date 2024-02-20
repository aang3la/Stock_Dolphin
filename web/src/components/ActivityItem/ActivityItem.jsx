import "./activityItem.css";

const ActivityItem = ({ activity, dashboard }) => {
  return (
    <div className={`activity-line ${dashboard ? "dashboard-activity" : ""}`}>
      <p>
        Admin has {activity.action} item <b>{activity.itemName}</b> in <b>{activity.categoryName}</b>
      </p>
      {!dashboard && <p>{activity.date}</p>}
    </div>
  );
};

export default ActivityItem;

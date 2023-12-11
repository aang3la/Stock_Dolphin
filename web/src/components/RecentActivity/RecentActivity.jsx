import "./recentActivity.css";

const RecentActivity = () => {
  const data = [
    "Admin has created item Office Pens in Office Supply  (Office Category)",
    "Admin has created item A4 Paper in Office Supply  (Office Category)",
    "Admin has deleted item Espresso in Kitchen Supply  (Kitchen Category)",
    "Admin has moved item Mouse in Office Supply (Office Category)",
  ];

  return (
    <div className="Activity">
      <h1 id="activity-title">Recent Activity</h1>
      <div className="data">
        {data.map((field, i) => {
          return (
            <div key={i} className="field">
              {field}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentActivity;

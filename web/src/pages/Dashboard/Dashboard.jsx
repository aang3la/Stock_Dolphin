import "./dashboard.css";
import { useContext } from "react";
import { Context } from "../../uttils/FetchContextProvider";
import Header from "../../components/Header/Header";
import Summary from "../../components/Summary/Summary";
import RecentOrders from "../../components/RecentOrders/RecentOrders";
import user_icon from "../../images/user-icon.png";
import ActivityItem from "../../components/ActivityItem/ActivityItem";

function Dashboard() {
  const { activities } = useContext(Context);

  const sortedActivities = activities.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latestActivities = sortedActivities.slice(0, 4);

  return (
    <div className="Dashboard">
      <main>
        <header className="dashboard-header">
          <Header title="Dashboard" />
          <div className="user-section">
            <p>Welcome back Name Surname!</p>
            <img src={user_icon} />
          </div>
        </header>
        <div className="mainContent">
          <Summary />

          <div className="activities-dashboard">
            <h1 id="activity-title">Recent Activity</h1>
            {latestActivities.map((activity) => (
              <ActivityItem key={activity._id} activity={activity} dashboard />
            ))}
          </div>
          <div className="orders-dashboard">
            <RecentOrders />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

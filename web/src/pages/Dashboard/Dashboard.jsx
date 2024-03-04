import "./dashboard.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../uttils/FetchContextProvider";
import { useFetchData } from "../../uttils/FetchData";
import Header from "../../components/Header/Header";
import Summary from "../../components/Summary/Summary";
import user_icon from "../../images/user-icon.png";
import ActivityItem from "../../components/ActivityItem/ActivityItem";
import DashboardOrders from "../../components/DashboardOrders/DashboardOrders";

function Dashboard() {
  const { activities } = useContext(Context);
  const { allOrders } = useFetchData();

  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(4);

  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log("Username stored:", localStorage.getItem("username"));    
    setUsername(storedUsername);
  }, []);

  const sortedActivities = activities.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latestActivities = sortedActivities.slice(0, 4);

  const sortedOrders = allOrders.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  //pagination
  const lastOrderIndex = currentPage * ordersPerPage;
  const firstOrderIndex = lastOrderIndex - ordersPerPage;
  const currentPosts = sortedOrders.slice(firstOrderIndex, lastOrderIndex);

  return (
    <div className="Dashboard">
      <main>
        <header className="dashboard-header">
          <Header title="Dashboard" />
          <div className="user-section">
            <p>Welcome back Admin!</p>
            <img src={user_icon} />
          </div>
        </header>
        <div className="mainContent">
          <Summary allOrders={allOrders} />

          <div className="activities-dashboard">
            <h1 id="activity-title">Recent Activity</h1>
            {latestActivities.map((activity) => (
              <ActivityItem key={activity._id} activity={activity} dashboard />
            ))}
          </div>
          <div>
            <h1 id="orders-heading">Recent Orders</h1>
            <div>
              <DashboardOrders
                totalOrders={allOrders.length}
                ordersPerPage={ordersPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                currentPosts={currentPosts}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

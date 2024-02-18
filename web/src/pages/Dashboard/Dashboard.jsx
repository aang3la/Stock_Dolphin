import "./dashboard.css";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../uttils/FetchContextProvider";
import { useFetchData } from "../../uttils/FetchData";
import Header from "../../components/Header/Header";
import Summary from "../../components/Summary/Summary";
import user_icon from "../../images/user-icon.png";
import ActivityItem from "../../components/ActivityItem/ActivityItem";
import OrderCard from "../../components/OrderCard/OrderCard";
import arrow from "../../images/arrow.png";
import pagination from "../../images/pagination-example.png";

function Dashboard() {
  const { activities } = useContext(Context);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:10004/orders`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );  
        const ordersData = await response.json();
  
        if (response.ok) {
          console.log("API Response for orders:", ordersData);
          setOrders(ordersData.data);
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.log("Error fetching orders.", err);
      }
    };
    fetchAllOrders();
  }, []);
  

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
          <Summary orders={orders} />

          <div className="activities-dashboard">
            <h1 id="activity-title">Recent Activity</h1>
            {latestActivities.map((activity) => (
              <ActivityItem key={activity._id} activity={activity} dashboard />
            ))}
          </div>
          <div className="orders-dashboard">
            <h1 id="orders-heading">Recent Orders</h1>
            <div className="orders-section">
              <div className="orders">
                {orders.map((order) => (
                  <OrderCard key={order._id} order={order} />
                ))}
              </div>
              <div>
                <img src={arrow} alt="arrow-icon" id="arrow" />
              </div>
            </div>
            <div className="pagination">
              <img src={pagination} alt="pagination" id="pagination" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

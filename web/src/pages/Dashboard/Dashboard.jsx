import "./dashboard.css";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Summary from "../../components/Summary/Summary";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import RecentOrders from "../../components/RecentOrders/RecentOrders";
import user_icon from "../../images/user-icon.png";

function Dashboard() {
  return (
    <div className="Dashboard">
      <aside>
        <Navigation /> 
      </aside>
      <main>
        <header>
          <Header title="Dashboard" />
          <div className="user-section">
            {/* <p>Welcome back Name Surname!</p>
            <img src={user_icon} /> */}
          </div>
        </header>
        <div className="mainContent">
          <Summary />
          <RecentActivity />
          <RecentOrders />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

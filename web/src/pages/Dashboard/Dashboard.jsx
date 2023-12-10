import "./dashboard.css";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Summary from "../../components/Summary/Summary";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import RecentOrders from "../../components/RecentOrders/RecentOrders";

function Dashboard() {
  return (
    <div className="Dashboard">
      <aside>
        <Navigation />
      </aside>
      <main>
        <header>
          <Header title="Dashboard" />
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

import "./dashboard.css";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";

function Dashboard() {
    return (
      <div className="Dashboard">
        <Navigation />
        <div className="Header">
          <Header title="Dashboard" />
        </div>
      </div>
    );
  }
  
  export default Dashboard;
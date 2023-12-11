// import { Link } from "react-router-dom";
import "./navigation.css";
import logo from "../../images/logo.png";
import dashboard_icon from "../../images/dashboard_icon.png";
import inventory_icon from "../../images/inventory_icon.png";
import reports_icon from "../../images/reports_icon.png";
import signout_icon from "../../images/signout_icon.png";

const Navigation = () => {
  return (
    <div className="App-navigation">
      <a href="/dashboard">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <ul className="Nav-list">
        <a href="/dashboard">
          <li className="list-items">
            <img src={dashboard_icon} alt="dashboard_icon" />
            Dashboard
          </li>
        </a>
        <a href="/inventory">
          <li className="list-items">
            <img src={inventory_icon} alt="inventory_icon" />
            Inventory
          </li>
        </a>
        <a href="/reports">
          <li className="list-items">
            <img src={reports_icon} alt="reports_icon" />
            Reports
          </li>
        </a>
        <a href="/suppliers">
          <li className="list-items">
            <span id="list-text">Suppliers</span>
          </li>
        </a>
        <li className="custom-item">
          <img src={signout_icon} alt="signout_icon" />
          Sign Out
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

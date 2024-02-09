import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navigation.css";
import logo from "../../images/logo.png";
import dashboard_icon from "../../images/dashboard_icon.png";
import inventory_icon from "../../images/inventory_icon.png";
import reports_icon from "../../images/reports_icon.png";
import signout_icon from "../../images/signout_icon.png";

const Navigation = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="App-navigation">
        <a href="/dashboard">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <ul className="Nav-list">
          <Link to="/dashboard">
            <li className="list-items">
              <img src={dashboard_icon} alt="dashboard_icon" />
              Dashboard
            </li>
          </Link>
          <Link to="/inventory">
            <li className="list-items">
              <img src={inventory_icon} alt="inventory_icon" />
              Inventory
            </li>
          </Link>
          <Link to="/reports">
            <li className="list-items">
              <img src={reports_icon} alt="reports_icon" />
              Reports
            </li>
          </Link>
          <Link to="/suppliers">
            <li className="list-items">
              <span id="list-text">Suppliers</span>
            </li>
          </Link>
          <Link to="/login">
            <li className="custom-item" onClick={handleSignOut}>
              <img src={signout_icon} alt="signout_icon" />
              Sign Out
            </li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

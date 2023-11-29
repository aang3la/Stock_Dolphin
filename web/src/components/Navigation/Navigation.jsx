// import { Link } from "react-router-dom";
import "./navigation.css";
import logo from '../../imgs/logo.png';
import dashboard_icon from "../../imgs/dashboard_icon.png";
import inventory_icon from "../../imgs/inventory_icon.png";
import reports_icon from "../../imgs/reports_icon.png";
import signout_icon from "../../imgs/signout_icon.png";


function Navigation() {
    return(
        <div className="App-navigation">
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="Nav-list">
                <li className="list-items"><img src={dashboard_icon} alt="dashboard_icon" /> Dashboard</li>
                <li className="list-items"><img src={inventory_icon} alt="inventory_icon"/> Inventory</li>
                <li className="list-items"><img src={reports_icon} alt="reports_icon" /> Reports</li>
                <li className="list-items">Suppliers</li>
                <li className="custom-item"><img src={signout_icon} alt="signout_icon" /> Sign Out</li>
            </ul>
        </div>
    )
};

export default Navigation;
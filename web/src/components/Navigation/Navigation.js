// import { Link } from "react-router-dom";
import "./Navigation.css";
import dashboard_icon from "../../imgs/dashboard_icon.png";
import inventory_icon from "../../imgs/inventory_icon.png";
import reports_icon from "../../imgs/reports_icon.png";
import signout_icon from "../../imgs/signout_icon.png";


export const Navigation = () => {
    return(
        <ul className="Nav-list">
            <li><img src={dashboard_icon} /> Dashboard</li>
            <li><img src={inventory_icon} /> Inventory</li>
            <li><img src={reports_icon} /> Reports</li>
            <li>Suppliers</li>
            <li><img src={signout_icon} /> Sign Out</li>
        </ul>
    )
}
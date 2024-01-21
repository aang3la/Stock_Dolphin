import "./reportsSection.css";
import { Link } from "react-router-dom";
import activity_icon from "../../images/activity-icon.png";
import inventory_icon from "../../images/inventory_icon.png";

const ReportsSection = () => {
  return (
    <div className="Reports-Section">
      <div className="Activity-field">
        <div id="activity">
          <img src={activity_icon} alt="activity_icon" />
          <Link to="/reports/activity-history" className="link">
            <h2>Activity History</h2>
          </Link>
        </div>
        <p>
          Activity history helps keep track of the things you do with your
          items, categories, tags, etc., such as creating, editing or deleting
        </p>
        <hr />
      </div>
      <div className="Inventory-field">
        <div id="inventory">
          <img src={inventory_icon} alt="inventory_icon" />
          <Link to="/reports/inventory-summary" className="link">
            <h2>Inventory Summary</h2>
          </Link>
        </div>
        <p>
          Inventory Summary provides detailed visualizations about the total
          cost of the categories over a period of time.
        </p>
        <hr />
      </div>
    </div>
  );
}

export default ReportsSection;

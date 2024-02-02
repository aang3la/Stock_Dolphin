import "./summary.css";
import categories_icon from "../../images/categories-icon.png";
import items_icon from "../../images/items-icon.png";
import orders_icon from "../../images/orders-icon.png";
import cost_icon from "../../images/cost-icon.png";
import { useContext } from "react";
import { Context } from "../../uttils/FetchContextProvider";

const Summary = () => {
  const { categories } = useContext(Context);

  const totalItems = () => {
    return categories.reduce((total, category) => 
        total + category.items.length, 0);
  }

  return (
    <div className="Summary">
      <h1 id="summary-heading">Inventory Summary</h1>
      <div className="Summary-container">
        <div className="Categories square">
          <img src={categories_icon} alt="categories-icon" />
          <h3>{categories.length}</h3>
          <p>Categories</p>
        </div>
        <div className="Items square">
          <img src={items_icon} alt="items-icon" />
          <h3>{totalItems()}</h3>
          <p>Items</p>
        </div>
        <div className="Orders square">
          <img src={orders_icon} alt="orders-icon" />
          <h3>TO-DO</h3>
          <p>Total Orders</p>
        </div>
        <div className="Cost square">
          <img src={cost_icon} alt="cost-icon" />
          <h3>€TO-DO</h3>
          <p>Total Cost</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;

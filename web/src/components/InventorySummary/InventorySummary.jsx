import { useFetchData } from "../../uttils/FetchData";
import "./inventorySummary.css";

const InventorySummary = ({ categories }) => {
  const { allOrders } = useFetchData();

  const totalItems = () => {
    return categories.reduce(
      (total, category) => total + category.items.length,
      0
    );
  };

  const totalCost = () => {
    return allOrders.reduce((total, order) => {
      return total + (order.totalPrice || 0);
    }, 0);
  };

  return (
    <div className="InventorySummary">
      <p>
        Categories: <b>{categories.length}</b>
      </p>
      <p>
        Items: <b>{totalItems()}</b>
      </p>
      <p>
        Total Orders: <b>{allOrders.length}</b>
      </p>
      <p>
        Total Cost: <b>€{totalCost()}</b>
      </p>
    </div>
  );
};

export default InventorySummary;

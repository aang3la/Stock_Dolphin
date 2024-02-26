import { useParams } from "react-router-dom";
import { useFetchData } from "../../uttils/FetchData";
import "./recentOrders.css";
import { useState, useEffect } from "react";

const RecentOrders = ({ order }) => {
  const { items } = useFetchData();
  const { itemName } = useParams;
  // const [item, setItem] = useState(null);

  const item = items.find(item => item.name === order.itemName);

  return (
    <div className="order-container">
      <div className="recent-order-image">
      <img src={`/imgs/items/${order.itemName.image}`} alt="item image" />
      </div>
      <section className="recent-order-content">
        <div className="recent-order-title">
          <p>{order.itemName}</p>
        </div>
        <div className="recent-order-p">
          <p>
            <b>{order.quantity} units</b> | €{order.totalPrice}
          </p>
        </div>
      </section>
    </div>
  );
};

export default RecentOrders;

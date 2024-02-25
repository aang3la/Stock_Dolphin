import "./recentOrders.css";

const RecentOrders = ({ order }) => {
  return (
    <div className="order-container">
      <div className="recent-order-image">{/* <p>{order.image}</p> */}</div>
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

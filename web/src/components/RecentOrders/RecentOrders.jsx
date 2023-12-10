import "./recentOrders.css";
import arrow from "../../images/arrow.png";
import pagination from "../../images/pagination-example.png";

function RecentOrders() {
  const orders = [
    { title: "Office Mouse", unit: "7 Unit", price: "€ 133.00" },
    { title: "A4 Paper", unit: "917 Unit", price: "€ 28.00" },
    { title: "Espresso", unit: "3 Unit", price: "€ 22.00" },
    { title: "Office Pens", unit: "66 Unit", price: "€ 17.00" },
  ];

  return (
    <div className="Orders">
      <div className="orders-heading">
        <h1>Recent Orders</h1>
      </div>
      <div className="orders-section">
        <div className="orders">
          {orders.map((order, i) => {
            return (
              <div key={i} className="order">
                <div className="order-image">{/* {order.image} */}</div>
                <div className="order-title">{order.title}</div>
                <div className="info">
                  <span id="unit">{order.unit}</span> | {order.price}
                </div>
              </div>
            );
          })}
        </div>
        <div className="arrow-icon">
          <img src={arrow} alt="arrow-icon" />
        </div>
      </div>
      <div className="pagination">
        <img src={pagination} alt="pagination" />
      </div>
    </div>
  );
}

export default RecentOrders;

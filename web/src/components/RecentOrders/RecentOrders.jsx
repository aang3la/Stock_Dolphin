import "./recentOrders.css";
import arrow from "../../images/arrow.png";
import pagination from "../../images/pagination-example.png";

const RecentOrders = () => {
  const orders = [
    { title: "Office Mouse", unit: "7 Unit", price: "€ 133.00" },
    { title: "A4 Paper", unit: "917 Unit", price: "€ 28.00" },
    { title: "Espresso", unit: "3 Unit", price: "€ 22.00" },
    { title: "Office Pens", unit: "66 Unit", price: "€ 17.00" },
  ];

  return (
    <div className="Orders">
      <h1 id="orders-heading">Recent Orders</h1>
      <div className="orders-section">
        <div className="orders">
          {orders.map((order, i) => {
            return (
              <div key={i} className="order">
                {/* <div className="order-image">{/* {order.image} */}
                <div className="order-title">{order.title}</div>
                <div className="info">
                  <span id="unit">{order.unit}</span> | {order.price}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <img src={arrow} alt="arrow-icon" id="arrow" />
        </div>
      </div>
      <div className="pagination">
        <img src={pagination} alt="pagination" id="pagination" />
      </div>
    </div>
  );
}

export default RecentOrders;

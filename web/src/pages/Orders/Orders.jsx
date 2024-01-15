import "./orders.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import OrdersSummary from "../../components/OrdersSummary/OrdersSummary";
import move_item from "../../images/move-item-icon.png";
import plus_icon from "../../images/plus.png";

const Orders = () => {
  const { categoryName, itemName } = useParams();
  const [orders, setOrders] = useState([]);

  const orderExample = [
    {
      quantity: "1292 units",
      totalPrice: "€1999",
      pricePerUnit: "€1.99",
      date: "10/10/2023",
      supplier: "Amazon Ltd Electronics",
    },
    {
      quantity: "1292 units",
      totalPrice: "€1999",
      pricePerUnit: "€1.99",
      date: "10/10/2023",
      supplier: "Amazon Ltd Electronics",
    },
    {
      quantity: "1292 units",
      totalPrice: "€1999",
      pricePerUnit: "€1.99",
      date: "10/10/2023",
      supplier: "Amazon Ltd Electronics",
    },
    {
      quantity: "1292 units",
      totalPrice: "€1999",
      pricePerUnit: "€1.99",
      date: "10/10/2023",
      supplier: "Amazon Ltd Electronics",
    },
    {
      quantity: "1292 units",
      totalPrice: "€1999",
      pricePerUnit: "€1.99",
      date: "10/10/2023",
      supplier: "Amazon Ltd Electronics",
    },
    {
      quantity: "1292 units",
      totalPrice: "€1999",
      pricePerUnit: "€1.99",
      date: "10/10/2023",
      supplier: "Amazon Ltd Electronics",
    },
    {
      quantity: "1292 units",
      totalPrice: "€1999",
      pricePerUnit: "€1.99",
      date: "10/10/2023",
      supplier: "Amazon Ltd Electronics",
    },
    {
      quantity: "1292 units",
      totalPrice: "€1999",
      pricePerUnit: "€1.99",
      date: "10/10/2023",
      supplier: "Amazon Ltd Electronics",
    },
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:10004/inventory/${categoryName}/${itemName}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Fetching orders for category:", categoryName);
        console.log("Fetching orders for an item:", itemName);

        const data = await response.json();

        if (response.ok) {
          console.log("API Response:", data);
          setOrders(data.data);
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.log("Error fetching orders.", err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="Orders-container">
      <header>
        <Header title={`Inventory > ${categoryName} > ${itemName}`} />
        <div className="orders-summary-container">
          <OrdersSummary orders={orders} />
          <button className="add-order-btn">
            <img src={plus_icon} alt="plus icon" />
            <p>ADD ORDER</p>
          </button>
        </div>
      </header>
      <div className="orders-title-section">
        <h1>Orders</h1>
        <button className="invoice-btn">Generate Invoice</button>
      </div>
      <hr className="order-hr" />
      <main>
        <div className="main-content">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Price per unit</th>
                <th>Ordered at</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              {orderExample.map((order, index) => (
                <tr key={index}>
                  <td className="cell-styling">{order.quantity}</td>
                  <td className="cell-styling">{order.totalPrice}</td>
                  <td className="cell-styling">{order.pricePerUnit}</td>
                  <td className="cell-styling">{order.date}</td>
                  <td className="cell-styling">{order.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="choosen-item">
            <div className="example-pic"></div>
            <div className="choosen-item-name">
              <p>Name: Mouse</p>
            </div>
            <div className="choosen-item-buttons">
              <button className="move-item">
                <img src={move_item} />
              </button>
              <button className="save-button">SAVE</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;

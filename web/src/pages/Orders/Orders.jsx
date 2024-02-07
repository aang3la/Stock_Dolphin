import "./orders.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import OrdersSummary from "../../components/OrdersSummary/OrdersSummary";
import move_item from "../../images/move-item-icon.png";
import plus_icon from "../../images/plus.png";
import OrderModal from "../../components/OrderModal/OrderModal";
import InvoiceModal from "../../components/InvoiceModal/InvoiceModal";
import MoveItemModal from "../../components/MoveItemModal/MoveItemModal";
import { useFetchData } from "../../uttils/FetchData";

const Orders = () => {
  const { categoryName, itemName } = useParams();
  const { orders } = useFetchData();

  const [openOrdersModal, setOpenOrdersModal] = useState(false);
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
  const [openMoveItemModal, setOpenMoveItemModal] = useState(false);

  return (
    <div className="Orders-container">
      <header>
        <Header title={`Inventory > ${categoryName} > ${itemName}`} />
        <div className="orders-summary-container">
          <OrdersSummary orders={orders} />
          <button className="add-order-btn" onClick={() => setOpenOrdersModal(true)}>
            <img src={plus_icon} alt="plus icon" />
            <p>ADD ORDER</p>
          </button>
          {openOrdersModal && <OrderModal closeModal={setOpenOrdersModal} />}
        </div>
      </header>
      <div className="orders-title-section">
        <h1>Orders</h1>
        <button className="invoice-btn" onClick={() => setOpenInvoiceModal(true)}>Generate Invoice</button>
        {openInvoiceModal && <InvoiceModal closeModal={setOpenInvoiceModal} />}
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
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="cell-styling">{order.quantity} units</td>
                  <td className="cell-styling">€{order.totalPrice}</td>
                  <td className="cell-styling">€{order.pricePerUnit}</td>
                  <td className="cell-styling">{order.date}</td>
                  <td className="cell-styling">{order.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="choosen-item">
            <div className="example-pic"></div>
            <div className="choosen-item-name">
              <p>Name: {itemName}</p>
            </div>
            <div className="choosen-item-buttons">
              <button className="move-item" onClick={() => setOpenMoveItemModal(true)}>
                <img src={move_item} />
              </button>
              {openMoveItemModal && <MoveItemModal closeModal={setOpenMoveItemModal} />}
              <button className="save-button">SAVE</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;
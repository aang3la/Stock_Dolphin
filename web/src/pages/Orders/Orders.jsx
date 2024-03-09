import "./orders.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import OrdersSummary from "../../components/OrdersSummary/OrdersSummary";
import move_item from "../../images/move-item-icon.png";
import plus_icon from "../../images/plus.png";
import edit_icon from "../../images/edit-icon.png";
import OrderModal from "../../components/OrderModal/OrderModal";
import InvoiceModal from "../../components/InvoiceModal/InvoiceModal";
import MoveItemModal from "../../components/MoveItemModal/MoveItemModal";
import OrderCard from "../../components/OrderCard/OrderCard";
import { useFetchData } from "../../uttils/FetchData";

const Orders = () => {
  const { categoryName, itemName } = useParams();
  const { orders, items, setItems } = useFetchData();

  const [openOrdersModal, setOpenOrdersModal] = useState(false);
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
  const [openMoveItemModal, setOpenMoveItemModal] = useState(false);

  const [itemData, setItemData] = useState({
    name: itemName,
  });
  const [isEditing, setIsEditing] = useState(false);

  const onChange = async (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
    console.log(itemData);
  };

  const selectedItem = items.find((item) => item.name === itemName);

  const handleEditItem = async (event) => {
    const itemId = selectedItem._id;

    try {
      event.preventDefault();
      const response = await fetch(
        `http://127.0.0.1:10003/inventory/${categoryName}/${itemId}`,
        {
          method: "PATCH",
          body: JSON.stringify(itemData),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Response:", response);
      if (response.ok) {
        setIsEditing(false);
        const updatedItem = items.map((it) => {
          if (it._id === selectedItem._id) {
            return { ...it, ...itemData };
          }
          return it;
        });
        setItems(updatedItem);
      } else {
        event.preventDefault();
      }
    } catch (err) {
      console.log("Error editing item.");
    }
  };

  return (
    <div className="Orders-container">
      <header>
        <Header title={`Inventory > ${categoryName} > ${itemName}`} />
        <div className="orders-summary-container">
          <OrdersSummary orders={orders} />
          <button
            className="add-order-btn"
            onClick={() => setOpenOrdersModal(true)}
          >
            <img src={plus_icon} alt="plus icon" />
            <p>ADD ORDER</p>
          </button>
          {openOrdersModal && (
            <OrderModal setOpenOrdersModal={setOpenOrdersModal} />
          )}
        </div>
      </header>
      <div className="orders-title-section">
        <h1>Orders</h1>
        <button
          className="invoice-btn"
          onClick={() => setOpenInvoiceModal(true)}
        >
          Generate Invoice
        </button>
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
              <tr className="order-lines">
                {orders.map((order) => (
                  <td>
                    <OrderCard key={order._id} order={order} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <form className="choosen-item">
            <div className="picture-container">
              {selectedItem && (
                <img
                  src={`/imgs/items/${selectedItem.image}`}
                  alt="item image"
                />
              )}
              <button
                type="button"
                className="edit-item-btn"
                onClick={() => setIsEditing(true)}
              >
                <img src={edit_icon} id="edit-item-icon" alt="Edit Item" />
              </button>
            </div>
            <div className="choosen-item-name">
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={itemData.name}
                  onChange={onChange}
                />
              ) : (
                <p>
                  Name: <b>{itemName}</b>
                </p>
              )}
            </div>
            <div className="choosen-item-buttons">
              <button
                className="move-item"
                onClick={() => setOpenMoveItemModal(true)}
              >
                <img src={move_item} />
              </button>
              {openMoveItemModal && (
                <MoveItemModal closeModal={setOpenMoveItemModal} />
              )}
              <button
                type="button"
                className="save-button"
                onClick={handleEditItem}
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Orders;

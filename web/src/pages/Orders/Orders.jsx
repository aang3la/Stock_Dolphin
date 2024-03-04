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
  const { orders, setOrders, items } = useFetchData();

  const [openOrdersModal, setOpenOrdersModal] = useState(false);
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
  const [openMoveItemModal, setOpenMoveItemModal] = useState(false);

  const [data, setData] = useState({
    quantity: "",
    pricePerUnit: "",
    date: "",
    supplierName: ""
  });

  const onChange = (e) => {
    setData({...data, [e.target.name]: e.target.value
    })
    console.log(data);
  };

  const handleAddOrder = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(
        `http://127.0.0.1:10004/inventory/${categoryName}/${itemName}`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      console.log("Response:", response);
      if (response.ok) {
        setOpenOrdersModal(false);
        const newOrder = await response.json();
        setOrders([...orders, newOrder.data]);
      } else {
        event.preventDefault();
      }
    } catch (err) {
      console.log("Error adding order.");
    }
  };

  // const handleEditItem = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const response = await fetch(`http://127.0.0.1:10003/inventory/${categoryName}/${id}`, {
  //       method: "PATCH",
  //       body: JSON.stringify(item),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     console.log("Response:", response);
  //     if (response.ok) {
  //       setOpenModal(false);
  //       const updatedItem = await response.json();
  //       setChangedItem(updatedItem);
  //     } else {
  //       event.preventDefault();
  //     }
  //   } catch (err) {
  //     console.log("Error editing item.");
  //   }
  // };

  const selectedItem = items.find(item => item.name === itemName);

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
            <OrderModal 
              closeModal={setOpenOrdersModal}
              callbackAction={handleAddOrder} 
              onChange={onChange}
              data={data}
          />)}
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
              {selectedItem && <img src={`/imgs/items/${selectedItem.image}`} alt="item image" />}
              <button className="edit-item-btn">
                <img src={edit_icon} id="edit-item-icon" alt="Edit Item" />
            </button>
            </div>
            <div className="choosen-item-name">
              <p>Name: <b>{itemName}</b></p>
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
              <button className="save-button">SAVE</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Orders;

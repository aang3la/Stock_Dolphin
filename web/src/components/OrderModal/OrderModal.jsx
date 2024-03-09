import "./orderModal.css";
import close from "../../images/close.png";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../uttils/FetchContextProvider";
import { useFetchData } from "../../uttils/FetchData";

const OrderModal = ({ setOpenOrdersModal }) => {
  const { categoryName, itemName } = useParams();
  const { orders, setOrders } = useFetchData();
  const { suppliers } = useContext(Context);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [data, setData] = useState({
    quantity: "",
    pricePerUnit: "",
    date: "",
    supplierId: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSelectSupplier = (event) => {
    setSelectedSupplier(event.target.value);
    console.log("Selected Supplier:", event.target.value);
  };

  const handleSelectedDate = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleAddOrder = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(
        `http://127.0.0.1:10004/inventory/${categoryName}/${itemName}`,
        {
          method: "POST",
          body: JSON.stringify({
            ...data,
            supplierId: selectedSupplier,
            date: selectedDate,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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

  return (
    <div className="overlay-container">
      <dialog id="order-dialog" open>
        <div className="order-modal-title">
          <h1>Add Order</h1>
          <button onClick={() => setOpenOrdersModal(false)}>
            <img src={close} className="close-icon" alt="close-icon" />
          </button>
        </div>
        <div className="modal-body">
          <select
            name="supplierName"
            value={selectedSupplier}
            onChange={handleSelectSupplier}
            className="order-select-container"
          >
            <option value="" hidden>
              Supplier*
            </option>
            {suppliers.map((supplier) => (
              <option key={supplier._id} value={supplier._id}>
                {supplier.name}
              </option>
            ))}
          </select>
          <hr id="custom-hr" />
          <div className="order-input-container">
            <input
              type="number"
              placeholder="Quantity*"
              name="quantity"
              value={data.quantity}
              onChange={onChange}
              required
            />
            <hr id="custom-hr" />
          </div>
          <div className="order-input-container">
            <input
              type="text"
              placeholder="Price per unit*"
              name="pricePerUnit"
              value={data.pricePerUnit}
              onChange={onChange}
              required
            />
            <hr id="custom-hr" />
          </div>
          <div className="order-input-date">
            <input
              type="date"
              name="date"
              value={selectedDate}
              onChange={handleSelectedDate}
            />
          </div>
          <hr />
        </div>
        <div className="modal-footer">
          <button id="cancel-btn" onClick={() => closeModal(false)}>
            CANCEL
          </button>
          <button id="add-btn" onClick={handleAddOrder}>
            ADD ORDER
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default OrderModal;

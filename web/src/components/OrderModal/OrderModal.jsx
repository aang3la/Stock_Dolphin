import "./orderModal.css";
import close from "../../images/close.png";
import { useContext, useState } from "react";
import { Context } from "../uttils/FetchContextProvider";

const OrderModal = ({ closeModal }) => {
  const { suppliers } = useContext(Context);
  const [selectedSupplier, setSelectedSupplier] = useState("");

  const handleSelect = (event) => {
    setSelectedSupplier(event.target.value);
  };

  return (
    <div className="overlay-container">
      <dialog id="order-dialog" open>
        <div className="order-modal-title">
          <h1>Add Order</h1>
          <button onClick={() => closeModal(false)}>
            <img src={close} className="close-icon" alt="close-icon" />
          </button>
        </div>
        <div className="modal-body">
          <select
            value={selectedSupplier}
            onChange={handleSelect}
            className="order-select-container"
          >
            <option value="" hidden>
              Supplier*
            </option>
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
          <hr id="custom-hr" />
          <div className="order-input-container">
            <input type="number" placeholder="Quantity*" required />
            <hr id="custom-hr" />
          </div>
          <div className="order-input-container">
            <input type="text" placeholder="Total Price*" required />
            <hr id="custom-hr" />
          </div>
          <div className="order-input-date">
            <input type="date" />
          </div>
          <hr />
        </div>
        <div className="modal-footer">
          <button id="cancel-btn" onClick={() => closeModal(false)}>
            CANCEL
          </button>
          <button id="add-btn">ADD ORDER</button>
        </div>
      </dialog>
    </div>
  );
};

export default OrderModal;

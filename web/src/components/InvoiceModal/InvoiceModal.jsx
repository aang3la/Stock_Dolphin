import "./invoiceModal.css";
import close from "../../images/close.png";
import { useContext, useState } from "react";
import { Context } from "../../uttils/FetchContextProvider";

const InvoiceModal = ({ closeModal }) => {
  const { suppliers } = useContext(Context);
  const [selectedSupplier, setSelectedSupplier] = useState(" ");

  const handleSelect = (event) => {
    setSelectedSupplier(event.target.value);
  };

  return (
    <div className="overlay-container">
      <dialog id="invoice-dialog" open>
        <div className="invoice-modal-title">
          <h1>Add Invoice</h1>
          <button onClick={() => closeModal(false)}>
            <img src={close} className="close-icon" alt="close-icon" />
          </button>
        </div>
        <div className="modal-body">
          <div className="invoice-input-container">
            <input type="text" placeholder="Invoice name" />
            <hr id="invoice-hr" />
          </div>
          <select
            value={selectedSupplier}
            onChange={handleSelect}
            className="invoice-select-container"
          >
            <option value="" hidden>Supplier</option>
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
          <hr id="invoice-hr" />
          <div className="invoice-input-date">
            <input type="date" />
          </div>
          <select className="invoice-select-container">
            <option value="">Select Orders</option>
          </select>
          <hr id="invoice-hr" />
          <hr id="footer-hr" />
        </div>
        <div className="modal-footer">
          <button id="cancel-btn" onClick={() => closeModal(false)}>
            CANCEL
          </button>
          <button id="add-btn">Add Invoice</button>
        </div>
      </dialog>
    </div>
  );
};

export default InvoiceModal;

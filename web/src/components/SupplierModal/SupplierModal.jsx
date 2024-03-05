import add_image from "../../images/add-image.png";
import close from "../../images/close.png";
import "./supplierModal.css";

const SupplierModal = ({closeModal, callbackAction, supplierData, onChange}) => {
  return (
    <div className="overlay-container">
      <dialog open className="supplier-modal">
        <div className="modal-title-suppliers">
          <h1>Add Supplier</h1>
          <button onClick={() => closeModal(false)}>
            <img src={close} className="close-icon" alt="close-icon" />
          </button>
        </div>
        <div className="modal-body">
          <div className="input-container-suppliers">
            <input
              type="text"
              placeholder="Name*"
              name="name"
              value={supplierData.name}
              onChange={onChange}
              required
            />
            <hr id="custom_hr" />
          </div>
          <div className="input-container-suppliers">
            <input
              type="text"
              placeholder="Address*"
              name="address"
              value={supplierData.address}
              onChange={onChange}
              required
            />
            <hr id="custom_hr" />
          </div>
          <div className="input-container-suppliers">
            <input
              type="text"
              placeholder="Phone Number*"
              name="phone"
              value={supplierData.phone}
              onChange={onChange}
              required
            />
            <hr id="custom_hr" />
          </div>
          <div className="input-container-suppliers">
            <input
              type="text"
              placeholder="E-mail*"
              name="email"
              value={supplierData.email}
              onChange={onChange}
              required
            />
            <hr id="custom_hr" />
          </div>
          <hr />
        </div>
        <div className="modal-footer-suppliers">
          <button id="cancel-btn" onClick={() => closeModal(false)}>
            CANCEL
          </button>
          <button id="add-btn" onClick={callbackAction}>
            ADD SUPPLIER
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default SupplierModal;

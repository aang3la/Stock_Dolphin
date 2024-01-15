import "./supplierCard.css";
import edit_icon from "../../images/edit-icon.png";
import delete_icon from "../../images/delete-icon.png";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const SupplierCard = ({ supplier }) => {
  const [openConfModal, setOpenConfModal] = useState(false);

  return (
    <div className="Supplier-card">
      <div key={supplier.id} className="supplier">
        <div className="supplier-name">
          <h1>{supplier.name}</h1>
        </div>
        <p>
          <span className="title">Address:</span> {supplier.address}
        </p>
        <hr className="hrClass" />
        <p>
          <span className="title">Phone Number:</span> {supplier.phone}
        </p>
        <hr className="hrClass" />
        <p>
          <span className="title">E-mail:</span> {supplier.email}
        </p>
        <hr className="hrClass" />
        <span className="supplier-buttons">
          <img
            src={edit_icon}
            id="edit_icon"
          />
          <img
            src={delete_icon}
            id="delete_icon"
            onClick={() => setOpenConfModal(true)}
          />
        </span>
      </div>
      {openConfModal && (
        <ConfirmationModal 
          closeModal={setOpenConfModal}
          content="Do you want to delete this supplier?"
          buttonName="CONFIRM"
        />)
      }
    </div>
  );
};

export default SupplierCard;

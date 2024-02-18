// SupplierCard.js
import "./supplierCard.css";
import edit_icon_2 from "../../images/edit-icon-2.png";
import delete_icon from "../../images/delete-icon.png";
import { useState, useContext } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { Context } from "../../uttils/FetchContextProvider";

const SupplierCard = ({ supplier }) => {
  const [openConfModal, setOpenConfModal] = useState(false);
  const { setSuppliers } = useContext(Context);
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const handleDeleteClick = () => {
    console.log("Delete button clicked"); 

    setSelectedSupplier(supplier._id); 
    setOpenConfModal(true); 
  };

  const handleDeleteSupplier = async () => {
    if (!selectedSupplier) {
      console.log("Supplier not found.//", selectedSupplier);
      return;
    }
    
    try {
      const response = await fetch(`http://127.0.0.1:10001/suppliers/${selectedSupplier}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        setSuppliers(prevSuppliers =>
          prevSuppliers.filter(supplier => supplier._id !== selectedSupplier)
        );
        setOpenConfModal(false);
      } else {
        console.log("Failed to delete supplier");
      }
    } catch (err) {
      console.log("Error deleting supplier:", err);
    }
  };

  return (
    <div className="Supplier-card">
      <div key={supplier._id} className="supplier">
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
          <img src={edit_icon_2} id="edit_icon" alt="Edit Icon" />
          <img
            src={delete_icon}
            id="delete_icon"
            onClick={handleDeleteClick}
            alt="Delete Icon"
          />
        </span>
      </div>
      {openConfModal && (
        <ConfirmationModal
          closeModal={() => setOpenConfModal(false)}
          content="Do you want to delete this supplier?"
          buttonName="CONFIRM"
          handleConfirm={handleDeleteSupplier} 
        />
      )}
    </div>
  );
};

export default SupplierCard;

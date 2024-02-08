import "./supplierCard.css";
import edit_icon_2 from "../../images/edit-icon-2.png";
import delete_icon from "../../images/delete-icon.png";
import { useState, useContext, useEffect } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { Context } from "../../uttils/FetchContextProvider";
import { useParams } from "react-router-dom";

const SupplierCard = ({ supplier }) => {
  const { id } = useParams();
  const [openConfModal, setOpenConfModal] = useState(false);
  const { suppliers, setSuppliers } = useContext(Context);

  const handleDeleteSupplier = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:10001/suppliers/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        setSuppliers((prevSuppliers) =>
          prevSuppliers.filter((supplier) => supplier.id !== id)
        );
        setOpenConfModal(false);
      } else {
        console.log("Failed to delete supplier");
      }
    } catch (err) {
      console.log("Error deleting supplier:", error);
    }
  };

  useEffect(() => {
    if (openConfModal) {
      handleDeleteSupplier();
    }
  }, [openConfModal]);

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
          <img src={edit_icon_2} id="edit_icon" />
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
          handleConfirm={handleDeleteSupplier}
        />
      )}
    </div>
  );
};

export default SupplierCard;

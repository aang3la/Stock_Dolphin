import "./itemCard.css";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import delete_icon from "../../images/delete-icon.png";

const ItemCard = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Item-Card">
      <div className="itemCard-images"></div>
      <div className="itemCard-content">
        <h1>{item.name}</h1>
        <p>7 Purchase Records | € 338.00</p>
      </div>
      <div className="footer-item-card">
        <img
          src={delete_icon}
          className="delete-btn"
          onClick={() => setOpenModal(true)}
        />
      </div>
      {openModal && (
        <ConfirmationModal
          closeModal={setOpenModal}
          content="Do you want to delete this item?"
          buttonName="CONFIRM"
        />
      )}
    </div>
  );
};

export default ItemCard;

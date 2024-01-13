import "./itemCard.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import delete_icon from "../../images/delete-icon.png";
import { Link } from "react-router-dom";

const ItemCard = ({ category, item }) => {
  const { categoryId } = useParams();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Item-Card">
      <div className="itemCard-images"></div>
      <div className="itemCard-content">
        <Link to={`/inventory/${categoryId}/${item.name}`}>
          <h1>{item.name}</h1>
        </Link>
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

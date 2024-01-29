import "./itemCard.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import delete_icon from "../../images/delete-icon.png";
import { Link } from "react-router-dom";
const moment = require("moment");

const ItemCard = ({ item, isGridView }) => {
  const { categoryName } = useParams();
  const [openModal, setOpenModal] = useState(false);

  const formattedDate = moment(item.date).format("MM/DD/YYYY HH:mm");

  const handleDelete = async () => {
    try {
      console.log("Deleting item...");

      const response = await fetch(
        `http://127.0.0.1:10003/inventory/${categoryName}/${item.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response);
      if (!response.ok) {
        console.log("Error deleting item:", response.statusText);
        return;
      }
      setOpenModal(false);
    } catch (err) {
      console.log("Error deleting item.");
    }
  };

  return (
    <div
      className={`Item-Card ${isGridView ? "gridViewCard" : "listViewCard"}`}
    >
      <div className="itemCard-images"></div>
      <div className="itemCard-content">
        <section className="title-p-item">
          <Link
            className="custom-link-item"
            to={`/inventory/${categoryName}/${item.name}`}
          >
            <h1>{item.name}</h1>
          </Link>
          <p>
            {item.orders.length} Purchase Records | € {item.totalAmount}
          </p>
        </section>
      </div>
      {!isGridView && (
          <div className="listViewDivider">
            <hr className="listViewDividerLine" />
            <p>
            Updated At: <br />
            <span id="itemCard-date">{formattedDate}</span>
            </p>
          </div>
        )}
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
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
};

export default ItemCard;

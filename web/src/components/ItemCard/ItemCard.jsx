import "./itemCard.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import delete_icon from "../../images/delete-icon.png";
import { Link } from "react-router-dom";
import { useFetchData } from "../../uttils/FetchData";
const moment = require("moment");

const ItemCard = ({ item, isGridView }) => {
  const { categoryName } = useParams();
  const { setItems, orders } = useFetchData();
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const formattedDate = moment(item.date).format("MM/DD/YYYY HH:mm");

  const handleDeleteClick = () => {
    setSelectedItem(item._id);
    setOpenModal(true);
  };

  const handleDeleteItem = async () => {
    if (!selectedItem) {
      console.log("Item not found!", selectedItem);
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:10003/inventory/${categoryName}/${selectedItem}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        setItems((prevItem) =>
          prevItem.filter((item) => item._id !== selectedItem)
        );
        setOpenModal(false);
      } else {
        console.log("Failed deleting item.");
      }
      setOpenModal(false);
    } catch (err) {
      console.log("Error deleting item.", err);
    }
  };

  // const calculateTotalPrice = () => {
  //   let totalPrice = 0;
  //   item.orders.forEach(orderId => {
  //     // Assuming each order has a price field, adjust this according to your actual data structure
  //     const order = getOrderDetails(orderId); // Assuming you have a function to fetch order details
  //     totalPrice += order.price;
  //   });
  //   return totalPrice;
  // };

  return (
    <div
      className={`Item-Card ${isGridView ? "gridViewCard" : "listViewCard"}`}
    >
      <div className="itemCard-images">
        <img src={`/imgs/items/${item.image}`} alt="item image" />
      </div>
      <div className="itemCard-content">
        <section className="title-p-item">
          <Link
            className="custom-link-item"
            to={`/inventory/${categoryName}/${item.name}`}
          >
            <h1>
              <b>{item.name}</b>
            </h1>
          </Link>
          <p>
            <b>{item.orders.length} Purchase Records</b> | €
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
          onClick={handleDeleteClick}
        />
      </div>
      {openModal && (
        <ConfirmationModal
          closeModal={setOpenModal}
          content="Do you want to delete this item?"
          buttonName="CONFIRM"
          handleConfirm={handleDeleteItem}
        />
      )}
    </div>
  );
};

export default ItemCard;

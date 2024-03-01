import "./categoryCard.css";
import delete_icon from "../../images/delete-icon.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { Context } from "../../uttils/FetchContextProvider";
import { useFetchData } from "../../uttils/FetchData";
const moment = require("moment");

const CategoryCard = ({ category, isGridView }) => {
  const { setCategories } = useContext(Context);
  const { allOrders } = useFetchData();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const formattedDate = moment(category.date).format("MM/DD/YYYY HH:mm");

  const categoryItems = () => {
    return category.items.length;
  };

  const calculateTotalCost = (category) => {
    let totalCost = 0;

    for (const itemId of category.items) {
      const itemOrders = allOrders.filter((order) => order.itemId === itemId);

      const itemTotalCost = itemOrders.reduce((acc, curr) => acc + curr.totalPrice,0);

      totalCost += itemTotalCost;
    }
    return totalCost;
  };

  const handleDeleteClick = () => {
    setSelectedCategory(category._id);
    setOpenModal(true);
  };

  const handleDeleteCategory = async () => {
    if (!selectedCategory) {
      console.log("Category not found!", selectedCategory);
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:10005/inventory/${selectedCategory}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        setCategories((prevCategory) =>
          prevCategory.filter((category) => category._id !== selectedCategory)
        );
        setOpenModal(false);
      } else {
        console.log("Failed deleting category.");
      }
      setOpenModal(false);
    } catch (err) {
      console.log("Error deleting category.", err);
    }
  };

  return (
    <div
      className={`Category-Card ${
        isGridView ? "gridViewCard" : "listViewCard"
      }`}
    >
      <div className="categoryCard-images"></div>
      <div className="categoryCard-content">
        <section className="title-p-card">
          <Link
            to={`/inventory/${category.title}`}
            className="custom-link-title"
          >
            <h1>
              <b>{category.title}</b>
            </h1>
          </Link>
          <p>
            <b>{categoryItems()} Items</b> | €{calculateTotalCost(category)}.00
          </p>
        </section>
        {!isGridView && (
          <div className="listViewDivider">
            <hr className="listViewDividerLine" />
          </div>
        )}
        <div className="categoryCard-footer">
          <p>
            Updated At: <br />
            <span id="categoryCard-date">{formattedDate}</span>
          </p>
          <img
            src={delete_icon}
            className="delete-btn"
            onClick={handleDeleteClick}
          />
        </div>
        {openModal && (
          <ConfirmationModal
            closeModal={setOpenModal}
            content="Are you sure that you want to delete? All the items in the category will be deleted."
            buttonName="CONFIRM"
            handleConfirm={handleDeleteCategory}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryCard;

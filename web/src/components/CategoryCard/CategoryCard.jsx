import "./categoryCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const CategoryCard = ({ category }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="Category-Card">
      <Link to={`/inventory/${category.title}`}>
        <h1>{category.title}</h1>
      </Link>
      <p>Updated at: {category.date}</p>
      <button className="delete-btn" onClick={() => setOpenModal(true)}>
        Delete
      </button>
      {openModal && (
        <ConfirmationModal
          closeModal={setOpenModal}
          content="Are you sure that you want to delete? All the items in the category will be deleted."
          buttonName="CONFIRM"
        />
      )}
    </div>
  );
};

export default CategoryCard;

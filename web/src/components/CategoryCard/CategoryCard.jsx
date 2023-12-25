import "./categoryCard.css";
import delete_icon from "../../images/delete-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
const moment = require("moment");

const CategoryCard = ({ category }) => {
  const [openModal, setOpenModal] = useState(false);

  const formattedDate = moment(category.date).format('MM/DD/YYYY HH:mm');

  return (
    <div className="Category-Card">
      <div className="categoryCard-images"></div>
      <div className="categoryCard-content">
        <Link to={`/inventory/${category.title}`} className="custom-link-title">
          <h1>{category.title}</h1>
        </Link>
        <p>3 Items  | € 338.00</p>
        <div className="categoryCard-footer">
          <p>
            Updated at: <br />
            <span id="categoryCard-date">{formattedDate}</span>
          </p>
          <img
            src={delete_icon}
            className="delete-btn"
            onClick={() => setOpenModal(true)}
          />
        </div>
        {openModal && (
          <ConfirmationModal
            closeModal={setOpenModal}
            content="Are you sure that you want to delete?"
            content2="All the items in the category will be deleted."
            buttonName="CONFIRM"
          />
        )}
      </div>
    </div>
  );
};

export default CategoryCard;

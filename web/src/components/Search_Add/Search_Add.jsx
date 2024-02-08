import "./search_add.css";
import { useState } from "react";
import plus_icon from "../../images/plus.png";
import search_icon from "../../images/search_icon.png";
import Modal from "../Modal/Modal";

const Search_Add = ({ searchText, text, modalHeading, modalBtn, query, onQueryChange }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="search-add">
      <label className="search-container">
        <img src={search_icon} alt="search icon" />
        <input
          type="text"
          placeholder={searchText}
          value={query}
          onChange={(e) => {onQueryChange(e.target.value)}}
        />
      </label>
      <button className="add-button" onClick={() => setOpenModal(true)}>
        <img src={plus_icon} alt="plus icon" />
        <p>{text}</p>
      </button>
      {openModal && <Modal heading={modalHeading} closeModal={setOpenModal} btnName={modalBtn} />}
    </div>
  );
};

export default Search_Add;

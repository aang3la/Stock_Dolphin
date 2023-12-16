import "./search_add.css"
import { useState } from "react";
import plus_icon from "../../images/plus.png";
import search_icon from "../../images/search_icon.png"

const Search_Add = ({ searchText, text }) => {
  const [search, setSearch] = useState(" ");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search-add">
      <div className="search-container">
        <img src={search_icon} alt="search icon" />
        <input
          type="text"
          placeholder={searchText}
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="add-button">
        <img src={plus_icon} alt="plus icon" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Search_Add;

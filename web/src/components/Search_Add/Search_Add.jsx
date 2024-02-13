import "./search_add.css";
import { useState, useEffect } from "react";
import plus_icon from "../../images/plus.png";
import search_icon from "../../images/search_icon.png";
import Modal from "../Modal/Modal";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../uttils/FetchData";

const Search_Add = ({ searchText, text, modalHeading, modalBtn, query, onQueryChange }) => {
  const { categoryName } = useParams();
  const { items, setItems } = useFetchData();
  const [openModal, setOpenModal] = useState(false);

  const [data, setData] = useState({
    name: "",
  });

  const dataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleAddItem = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(
        `http://127.0.0.1:10003/inventory/${categoryName}`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response);
      if (response.ok) {
        setOpenModal(false);
        // fetchItems();
        const newItem = await response.json();
        setItems([...items, newItem]);
      } else {
        event.preventDefault();
      }
    } catch (err) {
      console.log("Error adding item.");
    }
  };

  return (
    <div className="search-add">
      <label className="search-container">
        <img src={search_icon} alt="search icon" />
        <input
          type="text"
          placeholder={searchText}
          value={query}
          onChange={(e) => {
            onQueryChange(e.target.value);
          }}
        />
      </label>
      <button className="add-button" onClick={() => setOpenModal(true)}>
        <img src={plus_icon} alt="plus icon" />
        <p>{text}</p>
      </button>
      {openModal && (
        <Modal
          heading={modalHeading}
          closeModal={setOpenModal}
          btnName={modalBtn}
          handleAddItem={handleAddItem}
          dataChange={dataChange}
          data={data}
        />
      )}
    </div>
  );
};

export default Search_Add;

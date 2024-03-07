import "./search_add.css";
import { useState, useEffect, useContext } from "react";
import plus_icon from "../../images/plus.png";
import search_icon from "../../images/search_icon.png";
import Modal from "../Modal/Modal";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../uttils/FetchData";
import { Context } from "../../uttils/FetchContextProvider";
import SupplierModal from "../SupplierModal/SupplierModal";

const Search_Add = ({
  searchText,
  text,
  modalHeading,
  modalBtn,
  query,
  onQueryChange,
  modalFor,
}) => {
  const { categoryName } = useParams();
  const { items, setItems } = useFetchData();
  const { categories, setCategories, suppliers, setSuppliers } =
    useContext(Context);
  const [openModal, setOpenModal] = useState(false);

  const [data, setData] = useState({
    name: "",
    title: "",
  });

  const [supplierData, setSupplierData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const onChange = (e) => {
    if (modalFor == "category") {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
    if (modalFor == "item") {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
    if (modalFor == "supplier") {
      setSupplierData({
        ...supplierData,
        [e.target.name]: e.target.value,
      });
    }
  };

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
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Response:", response);
      if (response.ok) {
        setOpenModal(false);
        const newItem = await response.json();
        setItems([...items, newItem.data.newItem]);
      } else {
        event.preventDefault();
      }
    } catch (err) {
      console.log("Error adding item.");
    }
  };

  const handleAddCategory = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`http://127.0.0.1:10005/inventory`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Response:", response);
      if (response.ok) {
        setOpenModal(false);
        const newCategory = await response.json();
        setCategories([...categories, newCategory.data]);
      } else {
        event.preventDefault();
      }
    } catch (err) {
      console.log("Error adding category.");
    }
  };

  const handleAddSupplier = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`http://127.0.0.1:10001/suppliers`, {
        method: "POST",
        body: JSON.stringify(supplierData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Response:", response);
      if (response.ok) {
        setOpenModal(false);
        const newSupplier = await response.json();
        setSuppliers([...suppliers, newSupplier.supplierData]);
      } else {
        event.preventDefault();
      }
    } catch (err) {
      console.log("Error adding supplier.");
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
          callbackAction={
            modalFor == "category" ? handleAddCategory : handleAddItem
          }
          data={data}
          onChange={onChange}
          modalFor={modalFor}
        />
      )}
      {openModal && modalFor === "supplier" && (
        <SupplierModal
          closeModal={setOpenModal}
          callbackAction={handleAddSupplier}
          supplierData={supplierData}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Search_Add;

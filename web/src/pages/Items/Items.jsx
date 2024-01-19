import "./items.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Search_Add from "../../components/Search_Add/Search_Add";
import ItemCard from "../../components/ItemCard/ItemCard";
import Modal from "../../components/Modal/Modal";
import edit_green_icon from "../../images/edit-green-icon.png";

const Items = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:10003/inventory/${categoryName}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Fetching items for category:", categoryName);

        const data = await response.json();

        if (response.ok) {
          console.log("API Response:", data);
          setItems(data.data);
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.log("Error fetching items.", err);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="Items">
      <main>
        <header>
          <Header title={`Inventory > ${categoryName}`} />
          <Search_Add
            searchText="Search Items"
            text="ADD ITEM"
            modalHeading="Add Item"
            modalBtn="ADD ITEM"
          />
        </header>
        <div className="item-cards">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>
      <footer>
        <button
          className="edit-category-btn"
          onClick={() => setOpenModal(true)}
        >
          <img src={edit_green_icon} alt="edit-icon" />
          <p>Edit Category</p>
        </button>
        {openModal && (
          <Modal
            heading="Edit Category"
            closeModal={setOpenModal}
            btnName="SAVE CHANGES"
          />
        )}
      </footer>
    </div>
  );
};

export default Items;

import "./items.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Search_Add from "../../components/Search_Add/Search_Add";
import ItemCard from "../../components/ItemCard/ItemCard";
import Modal from "../../components/Modal/Modal";
import edit_green_icon from "../../images/edit-green-icon.png";
import listView from "../../images/listView.png";
import gridView from "../../images/gridView.png";
import { useFetchData } from "../../uttils/FetchData";

const Items = () => {
  const { categoryName } = useParams();
  const { items } = useFetchData();  
  const [openModal, setOpenModal] = useState(false);
  const [isGridView, setGridView] = useState(true);

  const toggleView = () => {
    setGridView((prevView) => !prevView);
  };

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
        <div className="main-itemCards-container">
          <section className="itemCards-section">
            <div className={isGridView ? "gridView" : "listView scrollList"}>
              {items.map((item) => (
                <ItemCard key={item._id} item={item} isGridView={isGridView} />
              ))}
            </div>
          </section>
          <section className="grid-list-view">
            <button onClick={() => setGridView(true)}>
              <img src={gridView} alt="gridView-icon" />
            </button>
            <button onClick={() => setGridView(false)}>
              <img src={listView} alt="listView-icon" />
            </button>
          </section>
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

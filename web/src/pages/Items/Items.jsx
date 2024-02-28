import "./items.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Search_Add from "../../components/Search_Add/Search_Add";
import ItemCard from "../../components/ItemCard/ItemCard";
import edit_green_icon from "../../images/edit-green-icon.png";
import listView from "../../images/listView.png";
import gridView from "../../images/gridView.png";
import { useFetchData } from "../../uttils/FetchData";
import EditCategoryModal from "../../components/EditCategoryModal/EditCategoryModal";

const Items = () => {
  const { categoryName } = useParams();
  const { items } = useFetchData();  
  const [filteredItems, setFilteredItems] = useState([]);
  const [query, setQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isGridView, setGridView] = useState(true);
  const [changedCategoryName, setChangedCategoryName] = useState("");

  useEffect(() => {
    if(query) {
      const filtered = items.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, [query]);

  const toggleView = () => {
    setGridView((prevView) => !prevView);
  };

  const onChange = async (e) => {
    setChangedCategoryName(e.target.value);
  };

  const handleEditCategory = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`http://127.0.0.1:10005/inventory/${categoryId}`, {
        method: "PATCH",
        body: JSON.stringify({ title: changedCategoryName }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("Response:", response);
      if (response.ok) {
        setOpenModal(false);
        const updatedCategory = await response.json();
        setChangedCategoryName(updatedCategory);
      } else {
        event.preventDefault();
      }
    } catch (err) {
      console.log("Error editing category.");
    }
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
            query={query}
            modalFor='item'
            onQueryChange={myQuery => setQuery(myQuery)}
          />
        </header>
        <div className="main-itemCards-container">
          <section className="itemCards-section">
            <div className={isGridView ? "gridView" : "listView scrollList"}>
              {(query ? filteredItems : items).map((item) => (
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
          <EditCategoryModal
          categoryName={categoryName}
            heading="Edit Category"
            closeModal={setOpenModal}
            btnName="SAVE CHANGES"
            onChange={onChange}
            handleEditCategory={handleEditCategory}
          />
        )}
      </footer>
    </div>
  );
};

export default Items;

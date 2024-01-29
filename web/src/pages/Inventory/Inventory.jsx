import "./inventory.css";
import { useState, useEffect, useContext } from "react";
import listView from "../../images/listView.png";
import gridView from "../../images/gridView.png";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Search_Add from "../../components/Search_Add/Search_Add";
import InventorySummary from "../../components/InventorySummary/InventorySummary";
import { Context } from "../../uttils/FetchContextProvider";

const Inventory = () => {
  // const [categories, setCategories] = useState([]);
  const { categories } = useContext(Context);
  const [isGridView, setGridView] = useState(true);

  const toggleView = () => {
    setGridView((prevView) => !prevView);
  };

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:10005/inventory", {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       console.log("Response:", response);

  //       const data = await response.json();

  //       if (response.ok) {
  //         console.log("API Response:", data);
  //         setCategories(data.data);
  //       } else {
  //         console.log("Error");
  //       }
  //     } catch (err) {
  //       console.log("Error fetching categories", err);
  //     }
  //   };
  //   fetchCategories();
  // }, []);
  return (
    <div className="Inventory">
      <main>
        <header>
          <Header title="Inventory" />
          <Search_Add
            searchText="Search Categories"
            text="ADD CATEGORY"
            modalHeading="Add Category"
            modalBtn="ADD CATEGORY"
          />
          <InventorySummary categories={categories} />
        </header>
        <div className="main-cards-container">
          <section className="cards-section">
            <div className={isGridView ? "gridView" : "listView scrollList"}>
              {categories.map((category) => (
                <CategoryCard
                  key={category._id}
                  category={category}
                  isGridView={isGridView}
                />
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
    </div>
  );
};

export default Inventory;

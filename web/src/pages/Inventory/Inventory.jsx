import "./inventory.css";
import { useContext, useState } from "react";
import listView from "../../images/listView.png";
import gridView from "../../images/gridView.png";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Search_Add from "../../components/Search_Add/Search_Add";
import InventorySummary from "../../components/InventorySummary/InventorySummary";
import { Context } from "../../uttils/FetchContextProvider";
import { fetchCategories1 } from "../../uttils/FetchData";

const Inventory = () => {
  const { categories } = useContext(Context);
  // const { categories } =  useFetchData();
  const [isGridView, setGridView] = useState(true);

  const toggleView = () => {
    setGridView((prevView) => !prevView);
  };
  
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

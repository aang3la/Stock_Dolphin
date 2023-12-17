import "./inventory.css";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Search_Add from "../../components/Search_Add/Search_Add";
import InventorySummary from "../../components/InventorySummary/InventorySummary";

const Inventory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async() => {
      try{
        const response = await fetch("http://127.0.0.1:10005/inventory", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        });
        console.log("Response:", response);

        const data = await response.json();

        if (response.ok) {
          console.log('API Response:', data);
          setCategories(data.data);
        } else {
          console.log("Error");
        }
      } catch(err) {
        console.log("Error fetching categories", err);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="Inventory">
      <aside>
        <Navigation />
      </aside>
      <main>
        <header>
          <Header title="Inventory" />
          <Search_Add searchText="Search Categories" text="ADD CATEGORY" />
          <InventorySummary categories={categories} />
        </header>
        <div className="category-cards">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Inventory;

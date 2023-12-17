import "./items.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Search_Add from "../../components/Search_Add/Search_Add";
import ItemCard from "../../components/ItemCard/ItemCard";

const Items = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

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

//   const selectedCategory = categories.find(
//     (category) => category.title === categoryName
//   );

  return (
    <div className="Items">
      <aside>
        <Navigation />
      </aside>
      <main>
        <header>
          <Header title={`Inventory > ${categoryName}`} />
          <Search_Add searchText="Search Items" text="ADD ITEM" />
        </header>
        <div className="item-cards">
          {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Items;

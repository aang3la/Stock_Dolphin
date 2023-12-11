import "./inventory.css";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

function Inventory() {
  return (
    <div className="Inventory">
      <aside>
        <Navigation />
      </aside>
      <main>
        <header>
          <Header title="Inventory" />
        </header>
        <CategoryCard />
      </main>
    </div>
  );
}

export default Inventory;

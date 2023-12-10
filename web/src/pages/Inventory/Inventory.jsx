import "./inventory.css";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";

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
      </main>
    </div>
  );
}

export default Inventory;

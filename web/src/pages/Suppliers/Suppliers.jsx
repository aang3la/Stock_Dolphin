import "./suppliers.css";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";

function Suppliers() {
  return (
    <div className="Suppliers">
      <aside>
        <Navigation />
      </aside>
      <main>
        <header>
          <Header title="Suppliers" />
        </header>
      </main>
    </div>
  );
}

export default Suppliers;

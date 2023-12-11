import "./suppliers.css";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import SupplierCard from "../../components/SupplierCard/SupplierCard";

function Suppliers() {
  return (
    <div className="Suppliers">
      <aside>
        <Navigation />
      </aside>
      <main>
        <header>
          <Header title="Suppliers" />
          <SupplierCard />
        </header>
      </main>
    </div>
  );
}

export default Suppliers;

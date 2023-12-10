import "./inventorySummary.css";
import Navigation from "../../components/Navigation/Navigation";

function InventorySummary() {
    return(
        <div className="Inventory-summary">
      <aside>
        <Navigation />
      </aside>
      <main>
        <header>{/* <Header title="Activity History" /> */}</header>
      </main>
    </div>
    )
}

export default InventorySummary;
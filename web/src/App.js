import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Inventory from "./pages/Inventory/Inventory";
import Reports from "./pages/Reports/Reports";
import Suppliers from "./pages/Suppliers/Suppliers";
import ActivityHistory from "./pages/ActivityHistory/ActivityHistory";
import InventorySummary from "./pages/InventorySummary/InventorySummary";
import SupplierCard from "./components/SupplierCard/SupplierCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/suppliers" element={<Suppliers />} />
        {/* <Route path="/suppliers/:id" component={<SupplierCard />} /> */}
        <Route path="/activity-history" element={<ActivityHistory />} />
        <Route path="/inventory-summary" element={<InventorySummary />} />{" "}
      </Routes>
    </>
  );
}

export default App;

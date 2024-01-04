import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Inventory from "./pages/Inventory/Inventory";
import Reports from "./pages/Reports/Reports";
import Suppliers from "./pages/Suppliers/Suppliers";
import ActivityHistory from "./pages/ActivityHistory/ActivityHistory";
import InventorySummary from "./pages/InventorySummary/InventorySummary";
import Items from "./pages/Items/Items";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Navigation />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:categoryName" element={<Items />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/activity-history" element={<ActivityHistory />} />
          <Route path="/inventory-summary" element={<InventorySummary />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

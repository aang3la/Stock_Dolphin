import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Inventory from "./pages/Inventory/Inventory";
import Orders from "./pages/Orders/Orders";
import Reports from "./pages/Reports/Reports";
import Suppliers from "./pages/Suppliers/Suppliers";
import ActivityHistory from "./pages/ActivityHistory/ActivityHistory";
import InventorySummaryReport from "./pages/InventorySummaryReport/InventorySummaryReport";
import Items from "./pages/Items/Items";
import Navigation from "./components/Navigation/Navigation";
import FetchContextProvider from "./uttils/FetchContextProvider";

function App() {
  return (
    <>
      <FetchContextProvider>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Navigation />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:categoryName" element={<Items />} />
            <Route path="/inventory/:categoryName/:itemName" element={<Orders />}/>
            <Route path="/reports" element={<Reports />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/reports/activity-history" element={<ActivityHistory />} />
            <Route path="/reports/inventory-summary" element={<InventorySummaryReport />} />
          </Route>
        </Routes>
      </FetchContextProvider>
    </>
  );
}

export default App;

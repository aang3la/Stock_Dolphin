import "./suppliers.css";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import SupplierCard from "../../components/SupplierCard/SupplierCard";
import Search_Add from "../../components/Search_Add/Search_Add";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:10001/suppliers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Response:", response);

        const data = await response.json();

        if (response.ok) {
          console.log("API Response:", data);
          setSuppliers(data.data);
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.error("Error fetching suppliers", err);
      }
    };
    fetchSuppliers();
  }, []);

  return (
    <div className="Suppliers">
      <aside>
        <Navigation />
      </aside>
      <main>
        <header>
          <Header title="Suppliers" />
          <Search_Add searchText="Search Suppliers" text="ADD SUPPLIER" />
        </header>
        <div className="suppliers-container">
          <div className="suppliers">
            {suppliers.map((supplier) => (
              <SupplierCard key={supplier.id} supplier={supplier} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Suppliers;

import "./suppliers.css";
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import SupplierCard from "../../components/SupplierCard/SupplierCard";

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
          console.log('API Response:', data);
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
        </header>
        <div className="suppliers">
          {suppliers.map((supplier) => (
            <SupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Suppliers;

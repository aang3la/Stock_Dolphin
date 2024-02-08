import "./suppliers.css";
import { useState, useEffect, useContext } from "react";
import Header from "../../components/Header/Header";
import SupplierCard from "../../components/SupplierCard/SupplierCard";
import Search_Add from "../../components/Search_Add/Search_Add";
import { Context } from "../../uttils/FetchContextProvider";

const Suppliers = () => {
  const { suppliers } = useContext(Context);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if(query) {
      const filtered = suppliers.filter((supplier) => {
        return supplier.name.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredSuppliers(filtered);
    } else {
      setFilteredSuppliers([]);
    }
  }, [query]);

  return (
    <div className="Suppliers">
      <main>
        <header>
          <Header title="Suppliers" />
          <Search_Add
            searchText="Search Suppliers"
            text="ADD SUPPLIER"
            modalHeading="Add Supplier"
            modalBtn="ADD SUPPLIER"
            query={query}
            onQueryChange={myQuery => setQuery(myQuery)}
          />
        </header>
        <div className="suppliers-container">
          <div className="suppliers">
            {(query ? filteredSuppliers : suppliers).map((supplier) => (
              <SupplierCard key={supplier._id} supplier={supplier} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Suppliers;

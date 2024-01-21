import React, { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";

export const Context = React.createContext();

const FetchContextProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [orders, setOrders] = useState([]);

  const { categoryName, itemName } = useParams();

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:10001/suppliers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Response:", response);

        const suppliersData = await response.json();

        if (response.ok) {
          console.log("API Response:", suppliersData);
          setSuppliers(suppliersData.data);
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.error("Error fetching suppliers", err);
      }
    };
    fetchSuppliers();

    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:10004/inventory/${categoryName}/${itemName}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Fetching orders for category:", categoryName);
        console.log("Fetching orders for an item:", itemName);

        const ordersData = await response.json();

        if (response.ok) {
          console.log("API Response:", ordersData);
          setOrders(ordersData.data);
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.log("Error fetching orders.", err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <Context.Provider value={{ suppliers, orders }}>
      {children}
    </Context.Provider>
  );
};

export default FetchContextProvider;
import React, { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";

export const Context = React.createContext();

const FetchContextProvider = ({ children }) => {
  const { categoryName, itemName } = useParams();

  const [categories, setCategories] = useState([]);
  // const [items, setItems] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:10005/inventory", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Response:", response);

        const categoriesData = await response.json();

        if (response.ok) {
          console.log("API Response for categories:", categoriesData);
          setCategories(categoriesData.data);
        } else {
          console.log("Error - categories");
        }
      } catch (err) {
        console.log("Error fetching categories", err);
      }
    };

    // const fetchItems = async () => {
    //   try {
    //     const response = await fetch(
    //       `http://127.0.0.1:10003/inventory/${categoryName}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //       }
    //     );
    //     console.log("Fetching items for category:", categoryName);

    //     const itemsData = await response.json();

    //     if (response.ok) {
    //       console.log("API Response for items:", itemsData);
    //       setItems(itemsData.data);
    //     } else {
    //       console.log("Error - items");
    //     }
    //   } catch (err) {
    //     console.log("Error fetching items.", err);
    //   }
    // };
    // fetchItems();

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
          console.log("API Response for suppliers:", suppliersData);
          setSuppliers(suppliersData.data);
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.error("Error fetching suppliers", err);
      }
    };

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
          console.log("API Response for orders:", ordersData);
          setOrders(ordersData.data);
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.log("Error fetching orders.", err);
      }
    };

    const fetchActivities = async () => {
      try {
        const response = await fetch("http://127.0.0.1:10006/activities", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
    
        const activitiesData = await response.json();
    
        if (response.ok) {
          console.log("API Response for activities:", activitiesData);
          setActivities(activitiesData.data);
        } else {
          console.log("Error - Activities API");
        }
      } catch (err) {
        console.log("Error fetching activities.", err);
      }
    };

    fetchCategories();
    // fetchItems();
    fetchSuppliers();
    fetchOrders();
    fetchActivities();
  }, [categoryName, itemName]);

  return (
    <Context.Provider value={{ categories, suppliers, orders, activities }}>
      {children}
    </Context.Provider>
  );
};

export default FetchContextProvider;

import React, { useEffect, useState, createContext } from "react";

export const Context = React.createContext();

const FetchContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
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
    fetchSuppliers();
    fetchActivities();
  }, []);

  return (
    <Context.Provider value={{ categories, setCategories, suppliers, setSuppliers, activities }}>
      {children}
    </Context.Provider>
  );
};

export default FetchContextProvider;

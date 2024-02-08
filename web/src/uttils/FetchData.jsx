import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useFetchData = () => {
  const { categoryName, itemName } = useParams();
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (categoryName) {
      const fetchItems = async () => {
        try {
          const response = await fetch(
            `http://127.0.0.1:10003/inventory/${categoryName}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          console.log("Fetching items for category:", categoryName);

          const itemData = await response.json();

          if (response.ok) {
            console.log("API Response:", itemData);
            setItems(itemData.data);
          } else {
            console.log("Error");
          }
        } catch (err) {
          console.log("Error fetching items.", err);
        }
      };
      fetchItems();
    }

    if (categoryName && itemName) {
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
      fetchOrders();
    }
  }, [categoryName, itemName]);

  return { items, orders };
};

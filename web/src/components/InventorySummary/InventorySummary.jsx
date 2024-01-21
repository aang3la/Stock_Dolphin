import "./inventorySummary.css";
import { useState } from "react";

const InventorySummary = ({ categories }) => {
    const totalItems = () => {
        return categories.reduce((total, category) => 
            total + category.items.length, 0);
    }

    const totalCost = () => {
        //TODO: Implement totalCost
        return 100;
    }

    const totalNumberOfOrders = () => {
        //TODO: Implement number of orders
        return 100;
    }

    return(
        <div className="InventorySummary">
         <p>Categories: <b>{categories.length}</b> </p>
         <p>Items: <b>{totalItems()}</b></p>
         <p>Total Orders: <b>{totalCost()}</b></p>
         <p>Total Cost: <b>{totalNumberOfOrders()}</b></p>
        </div>
    )
};

export default InventorySummary;
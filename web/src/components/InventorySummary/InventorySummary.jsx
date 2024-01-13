import "./inventorySummary.css";
import { useState } from "react";

const InventorySummary = ({ categories }) => {
    const totalCategories = () => {
        return categories.length;
    };
    // const totalItems = () => {
    //     return items.length;
    // };

    return(
        <div className="InventorySummary">
         <p>Categories: <b>{totalCategories()}</b> </p>
         <p>Items:</p>
         <p>Total Orders:</p>
         <p>Total Cost:</p>
        </div>
    )
};

export default InventorySummary;
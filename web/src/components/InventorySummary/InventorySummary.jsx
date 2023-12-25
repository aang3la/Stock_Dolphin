import "./inventorySummary.css";

const InventorySummary = ({ categories }) => {
    const totalCategories = () => {
        return categories.length;
    };

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
const InventorySummary = ({ categories }) => {
    const totalCategories = () => {
        return categories.length;
    };

    return(
        <>
         <p>Categories: <b>{totalCategories()}</b> </p>
        </>
    )
};

export default InventorySummary;
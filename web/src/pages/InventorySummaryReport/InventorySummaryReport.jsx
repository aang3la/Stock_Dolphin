import "./InventorySummaryReport.css";
import Header from "../../components/Header/Header";
import LineChart from "../../components/LineChart/LineChart";
import { useContext, useState } from "react";
import { Context } from "../../uttils/FetchContextProvider";

function InventorySummaryReport() {
  const { categories } = useContext(Context);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [buttonLabel, setButtonLabel] = useState('Show');

  const handleShowReset = () => {
    if (buttonLabel === 'Show') {
      // Perform action to show data based on selected inputs
      setButtonLabel('Reset');
    } else {
      // Perform action to reset inputs and data
      setStartDate('');
      setEndDate('');
      setSelectedCategory('');
      setButtonLabel('Show');
    }
  };

  return (
    <div className="Inventory-summary">
      <main>
        <header>
          <Header title="Reports > Inventory Summary" />
          
          <form className="inventory-top-part">
            <div className="date-input-container">
              <input 
                type="date" 
                name="startDate" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
              />
            </div>
            <div className="date-input-container">
              <input 
                type="date" 
                name="endDate" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)} 
              />
            </div>
            <div>
              <select 
                className="categories-select-container" 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)} 
              >
                <option value="" hidden>All Categories</option>
                {categories.map((category) => (
                  <option key={category._id} value={category.id}>{category.title}</option>
                ))}
              </select>
            </div>
            <button id="show-reset-btn" onClick={handleShowReset}>{buttonLabel}</button>
          </form>
        </header>
        {/* <LineChart dataExample={dataInventory} /> */}
      </main>
    </div>
  );
}

export default InventorySummaryReport;

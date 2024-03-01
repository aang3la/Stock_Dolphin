import "./InventorySummaryReport.css";
import Header from "../../components/Header/Header";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../uttils/FetchContextProvider";
import { useFetchData } from "../../uttils/FetchData";
import LineChart from "../../components/LineChart/LineChart";

function InventorySummaryReport() {
  const { allOrders } = useFetchData();
  const { categories } = useContext(Context);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [buttonLabel, setButtonLabel] = useState('Show');
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // Filter orders based on selected date range and category
    let filteredOrders = allOrders.filter(order => {
      const orderDate = new Date(order.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      if (start && end) {
        return orderDate >= start && orderDate <= end;
      } else if (start) {
        return orderDate >= start;
      } else if (end) {
        return orderDate <= end;
      }
      return true;
    });

    if (selectedCategory) {
      filteredOrders = filteredOrders.filter(order => order.category === selectedCategory);
    }

    // Aggregate total cost for each date
    const dateMap = {};
    filteredOrders.forEach(order => {
      const date = order.date.split('T')[0]; // Extract date without time
      if (dateMap[date]) {
        dateMap[date] += order.totalPrice;
      } else {
        dateMap[date] = order.totalPrice;
      }
    });

    // Prepare data for Line chart
    const labels = Object.keys(dateMap);
    const data = Object.values(dateMap);

    setChartData({
      labels: labels,
      datasets: [{
        label: "Total Cost of Orders",
        data: data,
        backgroundColor: 'rgb(75, 192, 192)',
      }]
    });
  }, [allOrders, startDate, endDate, selectedCategory]);

  const handleShowReset = () => {
    if (buttonLabel === 'Show') {
      setButtonLabel('Reset');
    } else {
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
        <LineChart chartData={chartData} />
      </main>
    </div>
  );
}

export default InventorySummaryReport;

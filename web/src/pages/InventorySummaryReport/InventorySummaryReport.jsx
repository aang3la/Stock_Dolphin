import "./InventorySummaryReport.css";
import Header from "../../components/Header/Header";
import LineChart from "../../components/LineChart/LineChart";
import { useState } from "react";
import {dataExample} from "../../components/LineChart/dataExample";

function InventorySummaryReport() {
  // const [dataInventory, setDataInventory] = useState({
  //   labels: dataExample.map((data) => data.date),
  //   datasets: [
  //     {
  //       label: "Total cost of orders",
  //       data: dataExample.map((data) => ({
  //         x: new Date(data.date),
  //         y: data.cost,
  //       })),
  //     },
  //   ],
  // });

  return (
    <div className="Inventory-summary">
      <main>
        <header>
          <Header title="Reports > Inventory Summary" />
          <section className="inventory-top-part">
            <div></div>
            <div></div>
            <div></div>
            <button>SHOW</button>
          </section>
        </header>
        {/* <LineChart dataExample={dataInventory} /> */}
      </main>
    </div>
  );
}

export default InventorySummaryReport;

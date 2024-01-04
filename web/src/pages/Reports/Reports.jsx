import "./reports.css";
import Header from "../../components/Header/Header";
import ReportsSection from "../../components/ReportsSection/ReportsSection";

function Reports() {
  return (
    <div className="Reports">
      <main>
        <header>
          <Header title="Reports" />
        </header>
        <ReportsSection />
      </main>
    </div>
  );
}

export default Reports;

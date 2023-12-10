import "./reports.css";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import ReportsSection from "../../components/ReportsSection/ReportsSection";

function Reports() {
  return (
    <div className="Reports">
      <aside>
        <Navigation />
      </aside>
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

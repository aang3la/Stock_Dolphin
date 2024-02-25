import "./dashboardOrders.css";
import arrow from "../../images/arrow.png";
import arrow_left from "../../images/arrow-left.png";
import circle from "../../images/circle.png";
import RecentOrders from "../RecentOrders/RecentOrders";

const DashboardOrders = ({
  totalOrders,
  ordersPerPage,
  setCurrentPage,
  currentPage,
  currentPosts,
}) => {
  let totalPages = Math.ceil(totalOrders / ordersPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <section className="orders-section">
        <div className="pagination-left">
          <button onClick={handlePreviousPage} className="arrow-btn">
            <img src={arrow_left} alt="Previous" className="arrow" />
          </button>
        </div>
        <div className="orders">
          {currentPosts.map((order) => (
            <RecentOrders key={order._id} order={order} />
          ))}
        </div>
        <div className="pagination-right">
          <button onClick={handleNextPage} className="arrow-btn">
            <img src={arrow} alt="Next" />
          </button>
        </div>
      </section>
      <div className="orders-pages">
        {Array.from(Array(totalPages), (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            <img src={circle} alt="Page" className="circle" />
          </button>
        ))}
      </div>
    </>
  );
};

export default DashboardOrders;

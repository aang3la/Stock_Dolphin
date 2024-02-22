import "./ordersSummary.css";

const OrdersSummary = ({ orders }) => {
    const totalOrders = () => {
        return orders.length;
    };

    const totalCost = () => {
      const totalPriceArray = orders.map(order => order.totalPrice);
        const total = totalPriceArray.reduce((acc, curr) => acc + curr, 0);
        return total;
  };

    const totalInvoices = () => {
      return 5;
    }

  return (
    <div className="OrdersSummary">
        <p>Total Orders: <b>{totalOrders()}</b></p>
        <p>Total Cost: <b>€{totalCost()}</b></p>
        <p>Total Invoices: <b>{totalInvoices()}</b></p>
    </div>
  )
}

export default OrdersSummary;
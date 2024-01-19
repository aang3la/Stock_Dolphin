import "./ordersSummary.css";

const OrdersSummary = () => {
    const totalOrders = () => {
        return 10;
    };

    const totalCost = () => {
      return 10;
    };

    const totalInvoices = () => {
      return 10;
    }

  return (
    <div className="OrdersSummary">
        <p>Total Orders: <b>{totalOrders()}</b></p>
        <p>Total Cost: <b>{totalCost()}</b></p>
        <p>Total Invoices: <b>{totalInvoices()}</b></p>
    </div>
  )
}

export default OrdersSummary;
import "./ordersSummary.css";

const OrdersSummary = ({ orders }) => {
    const totalOrders = () => {
        return orders.length;
    };

  return (
    <div className="OrdersSummary">
        <p>Total Orders: <b>{totalOrders()}</b></p>
        <p>Total Cost:</p>
        <p>Total Invoices:</p>
    </div>
  )
}

export default OrdersSummary;
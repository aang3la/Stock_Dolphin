import "./orderCard.css";
const moment = require("moment");

const OrderCard = ({ order }) => {
  const formattedDate = moment(order.date).format("MM/DD/YYYY");

  return (
    <div className="order-parts">
      <div className="order-part">
        <p>{order.quantity} units</p>
      </div>
      <div className="order-part">
        <p>€{order.totalPrice}</p>
      </div>
      <div className="order-part">
        <p>€{order.pricePerUnit}</p>
      </div>
      <div className="order-part">
        <p>{formattedDate}</p>
      </div>
      <div className="order-part">
        <p>{order.supplierName}</p>
      </div>
    </div>
  );
};

export default OrderCard;

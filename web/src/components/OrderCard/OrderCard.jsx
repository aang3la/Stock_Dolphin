import "./orderCard.css";

const OrderCard = ({ order }) => {
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
        <p>{order.date}</p>
      </div>
      <div className="order-part">
        <p>{order.supplier}</p>
      </div>
    </div>
  );
};

export default OrderCard;

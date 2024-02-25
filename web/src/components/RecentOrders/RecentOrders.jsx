import "./recentOrders.css";

const RecentOrders = ({ order }) => {
  // const [item, setItem] = useState(null);

  // useEffect(() => {
  //   // Fetch the item data when the component mounts
  //   const fetchItem = async () => {
  //     try {
  //       // Assuming you have an API endpoint to fetch item details
  //       const response = await fetch(`/api/items/${order.itemId}`);
  //       const data = await response.json();
  //       setItem(data); // Update the state with the fetched item data
  //     } catch (error) {
  //       console.error('Error fetching item:', error);
  //     }
  //   };

  //   fetchItem();
  // }, [order.itemId]);

  return (
    <div className="order-container">
      <div className="recent-order-image">
      {/* <img src={`/imgs/items/${item.image}`} alt="item image" /> */}
      </div>
      <section className="recent-order-content">
        <div className="recent-order-title">
          <p>{order.itemName}</p>
        </div>
        <div className="recent-order-p">
          <p>
            <b>{order.quantity} units</b> | €{order.totalPrice}
          </p>
        </div>
      </section>
    </div>
  );
};

export default RecentOrders;

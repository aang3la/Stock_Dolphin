// import "./categoryCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="Item-Card">
      <h1>{item.name}</h1>
      <button>Delete</button>
    </div>
  );
};

export default ItemCard;

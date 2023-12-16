import "./categoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <div className="Category-Card">
      <h1>{category.title}</h1>
      <p>{category.date}</p>
      <button>Delete</button>
    </div>
  );
}

export default CategoryCard;

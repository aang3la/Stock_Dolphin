import "./categoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="Category-Card">
      <Link to={`/inventory/${category.title}`}>
        <h1>{category.title}</h1>
      </Link>
      <p>Updated at: {category.date}</p>
      <button>Delete</button>
    </div>
  );
};

export default CategoryCard;

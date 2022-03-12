//NPM
import { useNavigate } from "react-router-dom";

//Projects files
import "../styles/CategoryCard.css";

function CategoryCard({ item }) {
  const { title, imageURL, desc } = item;
  const navigate = useNavigate();

  return (
    <div className="category-card">
      <img className="category-img" src={imageURL} alt="category" />
      <div className="category-info">
        <h2 className="category-title">{title}</h2>
        <p className="category-desc">{desc}</p>
        <button className="category-btn" onClick={() => navigate(`/${title}`)}>
          View {title}
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;

//NPM
import { useNavigate } from "react-router-dom";

//Projects files
import "../styles/CardCategory.css";

function CardCategory({ item }) {
  const { title, imageURL, desc } = item;
  const navigate = useNavigate();

  return (
    <article className="category">
      <img className="category-img" src={imageURL} alt="category" />
      <div className="category-info">
        <h1 className="category-title">{title}</h1>
        <p className="category-desc">{desc}</p>
        <button className="category-btn" onClick={() => navigate(`/${title}`)}>
          View {title}
        </button>
      </div>
    </article>
  );
}

export default CardCategory;

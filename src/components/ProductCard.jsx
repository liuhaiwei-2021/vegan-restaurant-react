import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ item, category }) {
  const { id, title, imageURL, desc } = item;
  return (
    <div className="card">
      <img className="card-img " src={imageURL} alt="card" />
      <div className="card-info">
        <Link to={`/${category}/${id}`}>
          <h3 className="card-title">{title}</h3>
        </Link>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
}

export default ProductCard;

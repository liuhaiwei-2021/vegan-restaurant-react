import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

// good but use 1 line export
export default function ProductCard({ item, category }) {
  const { id, title, imageURL, desc } = item;
  return (
    <div className="product-card">
      <img className="product-card-img " src={imageURL} alt="card" />
      <div className="product-card-info">
        <Link to={`/${category}/${id}`}>
          <h3 className="product-card-title">{title}</h3>
        </Link>
        <p className="product-card-desc">{desc}</p>
      </div>
    </div>
  );
}

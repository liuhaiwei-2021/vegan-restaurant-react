import "../styles/ProductCard.css";

function ProductCard({ item }) {
  const { title, imageURL, desc } = item;
  return (
    <div className="card">
      <img className="card-img " src={imageURL} alt="card" />
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
}

export default ProductCard;

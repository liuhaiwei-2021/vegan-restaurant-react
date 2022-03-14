// If this is used multiple times, is ok to make a new component otherwise not.
function ProductInfo({ product }) {
  const { title, desc, ingredients } = product;
  return (
    <div className="product-info">
      <h2 className="product-name">{title}</h2>
      <p>{desc}</p>
      <h3>Ingredients</h3>
      <ol className="product-ingredients">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ol>
    </div>
  );
}

export default ProductInfo;

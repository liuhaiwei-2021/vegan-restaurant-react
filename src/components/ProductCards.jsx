import ProductCard from "./ProductCard";

function ProductCards({ category, products }) {
  return (
    <section className="product-cards">
      {products.map((item, index) => (
        <ProductCard key={index} item={item} category={category} />
      ))}
    </section>
  );
}

export default ProductCards;

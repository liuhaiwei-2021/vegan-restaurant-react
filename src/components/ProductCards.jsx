import ProductCard from "./ProductCard";

// This could be done inside the component ProductDetails.
// We did this approach in the todolist because ShoppingScreen was too big (50+ lines) and because we wanted to show the "no items to show" if the user clicked on all the task
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

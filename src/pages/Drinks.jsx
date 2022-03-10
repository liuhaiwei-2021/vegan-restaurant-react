//Projects files
import drinks from "../data/drinks.json";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css";

function Drinks() {
  return (
    <div className="deserts">
      <Hero />
      <div className="container">
        <p className="category-desc">
          this is our unqie and special food in the whole world.
        </p>
        <div className="product-cards">
          {drinks.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drinks;

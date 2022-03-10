//Projects files
import deserts from "../data/deserts.json";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import "../styles/category.css";

function Deserts() {
  return (
    <div className="deserts">
      <Hero />
      <div className="container">
        <p className="category-desc">
          this is our unqie and special food in the whole world.
        </p>
        <div className="desert-cards">
          {deserts.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deserts;

//Projects files
import pages from "../data/pages.json";
import drinks from "../data/drinks.json";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css";

function Drinks() {
  const name = pages["drinks-name"];
  const imageURL = pages["drinks-imageURL"];
  const slogan = pages["drinks-slogan"];
  const heroContent = { name, imageURL, slogan };
  return (
    <div className="deserts">
      <Hero heroContent={heroContent} />
      <div className="container">
        <p className="category-desc">
          These drinks have at least 7 grams of protein per serving and are
          packed with nutritious fruits and vegetables.
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

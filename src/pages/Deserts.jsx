//Projects files
import pages from "../data/pages.json";
import deserts from "../data/deserts.json";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import "../styles/category.css";

function Deserts() {
  const name = pages["deserts-name"];
  const imageURL = pages["deserts-imageURL"];
  const slogan = pages["deserts-slogan"];
  const heroContent = { name, imageURL, slogan };
  const category = "deserts";
  return (
    <div className="deserts">
      <Hero heroContent={heroContent} />
      <div className="container">
        <p className="category-desc">
          These deserts have high fiber and protein per serving and are packed
          with nutritious fruits ,nuts and vegetbles.
        </p>
        <div className="desert-cards">
          {deserts.map((item, index) => (
            <ProductCard key={index} item={item} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deserts;

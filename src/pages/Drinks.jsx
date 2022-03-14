//Projects files
import pages from "../data/pages.json";
import drinks from "../data/drinks.json";
import categories from "../data/categories.json";
import Hero from "../components/Hero";
import ProductCards from "../components/ProductCards";
import CategoryDesc from "../components/CategoryDesc";
import "../styles/ProductCard.css";

function Drinks() {
  const name = pages["drinks-name"];
  const imageURL = pages["drinks-imageURL"];
  const slogan = pages["drinks-slogan"];
  const heroContent = { name, imageURL, slogan };
  const category = "drinks";
  const categoryDesc = categories[2].desc;

  return (
    <div className="deserts">
      <Hero heroContent={heroContent} />
      <div className="container">
        <CategoryDesc categoryDesc={categoryDesc} />
        <div className="product-cards">
          <ProductCards products={drinks} category={category} />
        </div>
      </div>
    </div>
  );
}

export default Drinks;

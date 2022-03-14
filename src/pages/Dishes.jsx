//Projects files
import pages from "../data/pages.json";
import dishes from "../data/dishes.json";
import categories from "../data/categories.json";
import Hero from "../components/Hero";
import ProductCards from "../components/ProductCards";
import CategoryDesc from "../components/CategoryDesc";
import "../styles/ProductCard.css";

function Dishes() {
  const name = pages["dishes-name"];
  const imageURL = pages["dishes-imageURL"];
  const slogan = pages["dishes-slogan"];
  const heroContent = { name, imageURL, slogan };
  const category = "dishes";
  const categoryDesc = categories[0].desc;

  return (
    <div className="dishes">
      <Hero heroContent={heroContent} />
      <div className="container">
        <CategoryDesc categoryDesc={categoryDesc} />
        <ProductCards products={dishes} category={category} />
      </div>
    </div>
  );
}

export default Dishes;

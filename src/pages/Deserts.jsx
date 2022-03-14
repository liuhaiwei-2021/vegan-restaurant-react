//Projects files
import pages from "../data/pages.json";
import deserts from "../data/deserts.json";
import categories from "../data/categories.json";
import Hero from "../components/Hero";
import ProductCards from "../components/ProductCards";
import CategoryDesc from "../components/CategoryDesc";
import "../styles/ProductCard.css";

function Deserts() {
  const name = pages["deserts-name"];
  const imageURL = pages["deserts-imageURL"];
  const slogan = pages["deserts-slogan"];
  const heroContent = { name, imageURL, slogan };
  const category = "deserts";
  const categoryDesc = categories[1].desc;

  return (
    <div className="deserts">
      <Hero heroContent={heroContent} />
      <div className="container">
        <CategoryDesc categoryDesc={categoryDesc} />
        <div className="desert-cards">
          <ProductCards products={deserts} category={category} />
        </div>
      </div>
    </div>
  );
}

export default Deserts;

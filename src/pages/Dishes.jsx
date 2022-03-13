//Projects files
import pages from "../data/pages.json";
import dishes from "../data/dishes.json";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import "../styles/category.css";

function Dishes() {
  const name = pages["dishes-name"];
  const imageURL = pages["dishes-imageURL"];
  const slogan = pages["dishes-slogan"];
  const heroContent = { name, imageURL, slogan };
  return (
    <div className="dishes">
      <Hero heroContent={heroContent} />
      <div className="container">
        <p className="category-desc">
          Healthy, delicious recipes, including dinner, lunch ideas, salad, soup
          and more, from the food and nutrition experts at Vegan Taste
        </p>
        <section className="product-cards">
          {dishes.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Dishes;

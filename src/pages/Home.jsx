//Projects files
import categories from "../data/categories.json";
import pages from "../data/pages.json";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CategoryCard from "../components/CategoryCard";

function Home() {
  const name = pages["home-name"];
  const imageURL = pages["home-imageURL"];
  const slogan = pages["home-slogan"];
  const heroContent = { name, imageURL, slogan };
  return (
    <div className="home">
      <Hero heroContent={heroContent} />
      <div className="home-cards">
        {categories.map((item, index) => (
          <CategoryCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

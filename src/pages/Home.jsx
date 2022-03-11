//Projects files
import categories from "../data/categories.json";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="category-cards">
        {categories.map((item, index) => (
          <CategoryCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

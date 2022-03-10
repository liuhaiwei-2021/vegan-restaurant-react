//Projects files
import categories from "../data/categories.json";
import Hero from "../components/Hero";
import CardCategory from "../components/CategoryCard";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Hero />
      <section className="categories">
        {categories.map((item, index) => (
          <CardCategory key={index} item={item} />
        ))}
      </section>
    </div>
  );
}

export default Home;

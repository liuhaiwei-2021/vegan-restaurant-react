//Projects files
import dishes from "../data/dishes.json";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "../styles/category.css";

function Dishes() {
  return (
    <div className="dishes">
      <Hero />
      <div className="container">
        <p className="category-desc">
          this is our unqie and special food in the whole world.
        </p>
        <section className="category-cards">
          {dishes.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Dishes;

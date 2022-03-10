//Projects files
import drinks from "../data/drinks.json";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "../styles/Card.css";

function Drinks() {
  return (
    <div className="deserts">
      <Hero />
      <div className="container">
        <p className="category-desc">
          this is our unqie and special food in the whole world.
        </p>
        <div className="category-cards">
          {drinks.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drinks;

import { useParams } from "react-router-dom";

//Projects files
import categories from "../data/categories.json";
// import deserts from "../data/deserts.json";
// import drinks from "../data/drinks.json";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "../styles/category.css";

function Category() {
  const { category } = useParams();
  //  const {title,imageURL,desc,products} =

  return (
    <div className="dishes">
      <Hero />
      <div className="container">
        <p className="category-desc"></p>
        <section className="category-cards">
          {dishes.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Category;

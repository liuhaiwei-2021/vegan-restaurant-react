import { useParams, useNavigate } from "react-router-dom";

import dishes from "../data/dishes.json";
import deserts from "../data/deserts.json";
import drinks from "../data/drinks.json";
import ProductInfo from "../components/productDetails/ProductInfo";
import ProductImg from "../components/productDetails/ProductImg";
import ProductNutrition from "../components/productDetails/ProductNutrition.jsx";
import "../styles/ProductDetils.css";

function ProductDetails() {
  const { id } = useParams();
  const { category } = useParams();
  const navigate = useNavigate();
  const productId = Number.parseInt(id);
  const data = dishes.concat(deserts).concat(drinks);

  const product = data.find((product) => {
    return product.id === productId && product.category === category;
  });
  console.log(product);

  return (
    <div className="product-details container">
      <ProductImg product={product} />
      <ProductInfo product={product} />
      <ProductNutrition product={product} />
      <button className="product-btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}

export default ProductDetails;

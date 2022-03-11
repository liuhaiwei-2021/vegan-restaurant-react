import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetils() {
  const { id } = useParams();
  const { category } = useParams();

  return (
    <div className="container">
      {id}
      {category}
    </div>
  );
}

export default ProductDetils;

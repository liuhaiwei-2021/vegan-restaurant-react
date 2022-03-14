// Over engineering -1
function ProductImg({ product }) {
  const { imageURL } = product;
  return (
    <div className="product-img">
      <img src={imageURL} alt="product" />
    </div>
  );
}

export default ProductImg;

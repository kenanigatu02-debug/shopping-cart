const Product = ({ product, onAdd }) => {
  return (
    <div className="premium-card">
  <div className="image-box">
  <span className="type-badge">{product.category === "Used" ? "USED" : "NEW"}</span>
    <img src={product.image} alt={product.name} />
 </div>
<div className="content-box">
        
  <h2 className="display-name">{product.name}</h2>
<p className="display-price">{product.price.toLocaleString()} ETB</p>
  <button className="add-cart-btn" onClick={() => onAdd(product)}>
    ADD TO CART
   </button>
  </div>
    </div>
  );
};

export default Product;
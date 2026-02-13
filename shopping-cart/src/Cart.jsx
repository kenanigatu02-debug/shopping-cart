const Cart = ({ cartItems, onRemove, onUpdateQty }) => {
  const total = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">SHOPPING CART</h1>
      <hr className="gold-line" />
      {cartItems.length === 0 ? (
        <h2 className="empty-msg">Your order list is empty.</h2>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="info">
                  <h3>{item.name}</h3>
                  <p>{item.price.toLocaleString()} ETB</p>
                </div>
                <div className="qty-picker">
                  <button onClick={() => onUpdateQty(item, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => onUpdateQty(item, item.qty + 1)}>+</button>
                </div>
                <button className="rem-btn" onClick={() => onRemove(item)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {cartItems.reduce((a, c) => a + c.qty, 0)}</p>
            <div className="total-box">
              <h2>Total Amount:</h2>
              <h2>{total.toLocaleString()} ETB</h2>
            </div>
            <button className="buy-btn">BUY NOW</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
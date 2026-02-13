import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Cart from './Cart'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
  setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
   setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  const onUpdateQty = (product, newQty) => {
    if (newQty < 1) return;
    setCartItems(cartItems.map((x) => x.id === product.id ? { ...x, qty: newQty } : x));
  };

  return (
<Router>
<Navbar cartCount={cartItems.length} />
  <Routes>
 <Route path="/" element={<Home onAdd={onAdd} />} />
   <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={onRemove} onUpdateQty={onUpdateQty} />} />
  </Routes>
    </Router>
  )
}

export default App
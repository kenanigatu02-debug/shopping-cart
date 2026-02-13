import { useState } from 'react';
import { products } from './Data';
import Product from './Product';

const Home = ({ onAdd }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = products.filter(p => 
    (filter === "All" || p.category === filter) && 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* MASSIVE DARK BMW STYLE HERO */}
      <div className="bmw-hero">
        <div className="hero-left">
           <h1 className="main-logo">ETHIO CARS</h1>
           
        </div>
        <div className="hero-right">
          <input 
            type="text" 
            placeholder="Search our inventory..." 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <div className="filter-group">
            <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>ALL</button>
            <button className={filter === "Used" ? "active" : ""} onClick={() => setFilter("Used")}>USED</button>
            <button className={filter === "New" ? "active" : ""} onClick={() => setFilter("New")}>NEW</button>
          </div>
        </div>
      </div>

      <div className="car-grid-large">
        {filtered.map(item => (
          <Product key={item.id} product={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default Home;
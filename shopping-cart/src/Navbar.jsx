import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">ETHIO CARS</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-btn">
          Cart <span className="badge">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
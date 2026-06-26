// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../css/navbar.css";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          ShopEase
        </Link>

        {/* Nav links */}
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              🛒 Cart
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
// src/components/Footer.jsx

import { Link } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Left side - brand */}
        <div className="footer-brand">
          <h3>ShopEase</h3>
          <p>Simple shopping, made easy.</p>
        </div>

        {/* Middle - quick links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* Right side - just some info */}
        <div className="footer-info">
          <h4>Contact</h4>
          <p>shopease@email.com</p>
          <p>New Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
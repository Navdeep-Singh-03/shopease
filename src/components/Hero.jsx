// src/components/Hero.jsx

import { Link } from "react-router-dom";
import "../css/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>Welcome to ShopEase</h1>
        <p>
          Find everything you need in one place. Quality products at honest
          prices — no fuss, no clutter.
        </p>
        <Link to="/products">
          <button className="btn-primary hero-btn">Browse Products</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
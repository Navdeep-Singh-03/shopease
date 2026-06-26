// src/pages/Home.jsx

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "../css/home.css";

function Home() {
  // Just grab the first 4 products to show as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Featured Products Section */}
      <section className="section-gray featured-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Simple info banner at the bottom */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why ShopEase?</h2>
          <div className="why-grid">
            <div className="why-card">
              <span>🚚</span>
              <h4>Free Delivery</h4>
              <p>On all orders above ₹999</p>
            </div>
            <div className="why-card">
              <span>↩️</span>
              <h4>Easy Returns</h4>
              <p>7 day return policy</p>
            </div>
            <div className="why-card">
              <span>✅</span>
              <h4>Quality Products</h4>
              <p>Verified by our team</p>
            </div>
            <div className="why-card">
              <span>🔒</span>
              <h4>Secure Payments</h4>
              <p>Your data is always safe</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
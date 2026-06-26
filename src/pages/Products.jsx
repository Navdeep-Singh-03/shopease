// src/pages/Products.jsx

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import products from "../data/products";
import "../css/products.css";

// Get unique categories from the products list
const allCategories = ["All", ...new Set(products.map((p) => p.category))];

function Products() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // First filter by category, then filter by search query
  const filteredProducts = products
    .filter((p) => {
      if (activeCategory === "All") return true;
      return p.category === activeCategory;
    })
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="page-wrapper">
      <div className="container">
        <h2 className="section-title">All Products</h2>

        {/* Search bar */}
        <SearchBar query={query} onChange={setQuery} />

        {/* Category filter buttons */}
        <div className="category-filters">
          {allCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product grid or empty message */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="no-results">No products found. Try a different search.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
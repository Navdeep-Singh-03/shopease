// src/pages/ProductDetails.jsx

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import "../css/productdetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  // Find the product that matches the id in the URL
  const product = products.find((p) => p.id === parseInt(id));

  // If no product found, show a simple message
  if (!product) {
    return (
      <div className="page-wrapper">
        <div className="container">
          <p>Product not found.</p>
          <button className="btn-primary" onClick={() => navigate("/products")}>
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  function handleAddToCart() {
    addToCart(product);
    setAdded(true);

    // Reset the confirmation message after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        {/* Back button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="details-layout">
          {/* Product image */}
          <div className="details-image">
            <img src={product.image} alt={product.title} />
          </div>

          {/* Product info */}
          <div className="details-info">
            <p className="details-category">{product.category}</p>
            <h2 className="details-title">{product.title}</h2>
            <p className="details-price">₹{product.price}</p>
            <p className="details-description">{product.description}</p>

            <button className="btn-primary add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>

            {/* Small confirmation message after adding */}
            {added && (
              <p className="added-msg">✅ Added to cart!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
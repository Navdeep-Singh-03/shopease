// src/components/ProductCard.jsx

import { Link } from "react-router-dom";
import "../css/productcard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <p className="card-category">{product.category}</p>
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">₹{product.price}</p>
        <Link to={`/products/${product.id}`}>
          <button className="btn-primary card-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
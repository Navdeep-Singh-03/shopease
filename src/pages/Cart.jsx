// src/pages/Cart.jsx

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../css/cart.css";

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart();

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="page-wrapper">
        <div className="container">
          <h2 className="section-title">Your Cart</h2>
          <div className="empty-cart">
            <p>🛒 Your cart is empty.</p>
            <Link to="/products">
              <button className="btn-primary">Browse Products</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <h2 className="section-title">Your Cart</h2>

        <div className="cart-layout">
          {/* Cart items list */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />

                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">₹{item.price}</p>

                  {/* Quantity controls */}
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                <div className="cart-item-right">
                  {/* Item subtotal */}
                  <p className="cart-item-subtotal">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span>{totalPrice >= 999 ? "Free" : "₹49"}</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>₹{totalPrice >= 999 ? totalPrice : totalPrice + 49}</span>
            </div>

            {/* Not a real button — just for show */}
            <button className="btn-primary checkout-btn">
              Proceed to Checkout
            </button>
            <p className="checkout-note">
              * Checkout is not implemented in this project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
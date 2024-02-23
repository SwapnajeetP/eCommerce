import React from "react";
import "./Cart.css";
export default function Cart({ cartItems }) {
  return (
    <>
      <div className="cart-head">Cart Items</div>
      <div className="cart">
        {cartItems.length === 0 && (
          <div className="cart-empty">Cart is Empty</div>
        )}

        {cartItems.map((cartItems) => (
          <div className="cart-item-list">
            <img
              className="cart-image"
              key={cartItems.id}
              src={cartItems.img}
              alt=""
            />

            <div className="cart-item-name">{cartItems.name}</div>
            <div className="cart-item-price">${cartItems.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}

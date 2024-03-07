import React from "react";
import "./Cart.css";
export default function Cart({
  cartItems,
  handleAdd,
  handleRemove,
  ClearCart,
}) {
  return (
    <>
      <div className="cart-head">Shopping Cart</div>
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
            <div className="add-remove">
              <button
                className="cart-item-btn"
                onClick={() => {
                  handleAdd(cartItems);
                }}
              >
                +
              </button>
              <button
                className="cart-item-btn"
                onClick={() => {
                  handleRemove(cartItems);
                }}
              >
                -
              </button>
            </div>
            <div className="q">Quantity: {cartItems.quantity}</div>
            <div className="cart-item-price">${cartItems.price*cartItems.quantity}</div>
          </div>
        ))}
        <div className="clearCart">
          {cartItems.length >= 1 && (
            <button onClick={() => ClearCart()}>Clear Cart</button>
          )}
        </div>
      </div>
    </>
  );
}

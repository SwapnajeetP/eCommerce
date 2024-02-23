import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./Components/Data";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import ShopSection from "./Components/ShopSection";
import Signin from "./Components/Signin";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { productItems } = data;

  const handleCartAdd = (productItem) => {
    const productExist = cartItems.find((item) => item.id === productItem.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productItem.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...productItem, quantity: 1 }]);
    }
  };

  const handleCartRemove = (productItem) => {
    const productExist = cartItems.find((item) => item.id === productItem.id);

    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== productItem.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productItem.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const ClearCart = () => {
    setCartItems([]);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar cartItems={cartItems} />
              <ShopSection
                productItems={productItems}
                handleAdd={handleCartAdd}
              />
            </>
          }
        />
        <Route path="/sign" element={<Signin />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAdd={handleCartAdd}
              handleRemove={handleCartRemove}
              ClearCart={ClearCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

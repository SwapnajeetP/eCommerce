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

  const handleCart = (productItem) => {
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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <ShopSection
                productItems={productItems}
                handleCart={handleCart}
              />
            </>
          }
        />
        <Route path="/sign" element={<Signin />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} handleCart={handleCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

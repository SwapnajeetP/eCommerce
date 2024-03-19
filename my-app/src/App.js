import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./Components/Data";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import ShopSection from "./Components/ShopSection";
import Signin from "./Components/Signin";
import SlideBar from "./Components/SlideBar";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import CreateAcc from "./Components/CreateAcc";

function App() {
  const productItems = data;

  const [cartItems, setCartItems] = useState([]);

  const [filteritems, setfilterItems] = useState([...data]);

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

  const filterItem = (catItem) => {
    const updatedItem = data.filter((item) => {
      return item.category === catItem;
    });
    setfilterItems(updatedItem);
  };

  const AllItems = () => {
    const AllItems = data.map((item) => {
      return item;
    });
    setfilterItems(AllItems);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar cartItems={cartItems} filterItem={filterItem} />
              <SlideBar />
              <ShopSection
                productItems={productItems}
                handleAdd={handleCartAdd}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar cartItems={cartItems} />
              <Products
                filterprod={filteritems}
                handleAdd={handleCartAdd}
                filterItem={filterItem}
                AllItems={AllItems}
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
        <Route path="/sign/createAccount" element={<CreateAcc />} />
      </Routes>
    </Router>
  );
}

export default App;

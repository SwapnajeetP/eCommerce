//import logo from "./logo.svg";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ShopSection from "./Components/ShopSection";
import Signin from "./Components/Signin";
import SlideBar from "./Components/SlideBar";
import data from "./Components/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Signin />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

function Home() {
  const { productItems } = data;
  return (
    <>
      {/* <Navbar />
      <SlideBar /> */}
      <ShopSection productItems={productItems} />
      {/* <Footer /> */}
    </>
  );
}
export default App;

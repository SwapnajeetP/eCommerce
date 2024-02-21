//import logo from "./logo.svg";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ShopSection from "./Components/ShopSection";
import Signin from "./Components/Signin";
import SlideBar from "./Components/SlideBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <SlideBar />
      <ShopSection />
      <Footer />
      {/* <Signin /> */}
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<div>Hello</div>} />
    //     {/* Add more routes as needed */}
    //   </Routes>
    // </BrowserRouter>
  );
}
export default App;

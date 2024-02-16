//import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ShopSection from "./Components/ShopSection";
import SlideBar from "./Components/SlideBar";

function App() {
  return (
    <div>
      <Navbar />
      <SlideBar />
      <ShopSection />
      <Footer />
    </div>
  );
}
export default App;

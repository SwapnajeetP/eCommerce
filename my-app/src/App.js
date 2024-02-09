//import logo from "./logo.svg";
import "./App.css";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";
import Card4 from "./Components/Card4";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import SlideBar from "./Components/SlideBar";

function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <SlideBar />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Footer />
    </div>
  );
}

export default App;

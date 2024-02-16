//import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ShopSection from "./Components/ShopSection";
import SlideBar from "./Components/SlideBar";

function App() {
  // // window.addEventListener("DOMContentLoaded", (event) => {
  // const sidebar = document.querySelector(".sidebar");
  // const cross = document.querySelector(".fa-xmark");
  // const black = document.querySelector(".black");
  // const sidebtn = document.querySelector(".fa-bars");

  // sidebtn.addEventListener("click", () => {
  //   sidebar.classList.add("active");
  //   cross.classList.add("active");
  //   black.classList.add("active");
  // });

  // cross.addEventListener("click", () => {
  //   sidebar.classList.remove("active");
  //   cross.classList.remove("active");
  //   black.classList.remove("active");
  // });
  // });

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

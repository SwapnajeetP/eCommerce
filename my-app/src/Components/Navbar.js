import React from "react";
import "./Navbarstyle1.css";
export default function Navbar() {
  return (
    <div>
      <header>
        <div className="navbar1">
          <div className="navlogo navborder">
            <div className="logo">
              <h3>Navbar</h3>
            </div>
          </div>
          <div className="navaddress navborder">
            <div className="addicon">
              <i class="fa-solid fa-location-dot"></i>
              <p className="loc">GPS Location</p>
            </div>
          </div>
          <div className="navsearch">
            <select className="searchselect" name="" id="">
              <option value="">All</option>
            </select>
            <input className="searchinput" placeholder="search" />
            {/* <div className="searchicon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div> */}
          </div>
          <div className="language">
            <img
              src={require("C:/eCommerce_web/my-app/src/Images/india.png")}
              alt="flag"
              className="imgflag"
            />
            <select className="langselect" name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          <div className="signin navborder">
            <p>
              <span>Hello, sign in</span>
            </p>

            <p className="signbox">Accounts & Lists</p>
          </div>
          <div className="signin navborder">
            <p>
              <span>Return</span>
            </p>

            <p className="signbox">& Orders</p>
          </div>
          <div className="navcart navborder">
            <i class="fa-solid fa-cart-shopping"></i>
            Cart
          </div>
        </div>
        <div className="panel">
          <div className="all">
            <i class="fa-solid fa-bars"></i>
            All
          </div>
          <div className="panelops">
            <p>Best Sellers</p>
            <p>Today's deals</p>
            <p>Mobiles</p>
            <p>Home & Kitchen</p>
            <p>Gift Ideas</p>
            <p>Fashion</p>
          </div>
          <div className="paneldeals">
            New Launches from Mobiles,electronics & more | Shop now
          </div>
        </div>
      </header>
    </div>
  );
}

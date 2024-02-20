import React, { useState } from "react";
import "./Navbarstyle1.css";
export default function Navbar() {
  const [displayStyle, changeDisplayStyle] = useState("none");

  function displaySidebar() {
    changeDisplayStyle("block");
  }
  function hideSidebar() {
    changeDisplayStyle("none");
  }

  const [Allbar, showAllbar] = useState("none");
  function displayAllbar() {
    showAllbar("block");
  }
  function hideAllbar() {
    showAllbar("none");
  }
  return (
    <div>
      <div className="sidebarParent" style={{ display: Allbar }}>
        <div className="sidebar">
          <div className="hdn-head">
            <h2>Hello, sign in</h2>
          </div>
          <div className="hdn-content">
            <h3>Trending</h3>
            <ul>
              <div>
                <li>Best Sellers</li>
                <i className="fa-solid fa-angle-right arrowright"></i>
              </div>
              <div>
                <li>Best Sellers</li>
                <i className="fa-solid fa-angle-right arrowright"></i>
              </div>
              <div>
                <li>Best Sellers</li>
                <i className="fa-solid fa-angle-right arrowright"></i>
              </div>
            </ul>
          </div>

          <div className="hdn-content">
            <h3>Trending</h3>
            <ul>
              <div>
                <li>Best Sellers</li>
                <i className="fa-solid fa-angle-right arrowright"></i>
              </div>
              <div>
                <li>Best Sellers</li>
                <i className="fa-solid fa-angle-right arrowright"></i>
              </div>
              <div>
                <li>Best Sellers</li>
                <i className="fa-solid fa-angle-right arrowright"></i>
              </div>
            </ul>
          </div>
          <div className="hdn-content">
            <h3>Trending</h3>
            <ul>
              <div>
                <li>Best Sellers</li>
                <i className="fa-solid fa-angle-right arrowright"></i>
              </div>
              <div>
                <li>Best Sellers</li>
                <i className="fa-solid fa-angle-right arrowright"></i>
              </div>
              <div>
                <li>Best Sellers</li>
                <i className="fa-solid fa-angle-right arrowright"></i>
              </div>
            </ul>
          </div>
        </div>
        <div className="black"></div>
        <i className="fa-solid fa-xmark allhidebar" onClick={hideAllbar}></i>
      </div>

      {/* navsidebar */}
      <i
        className="fa-solid fa-xmark hidemark"
        onClick={hideSidebar}
        style={{ display: displayStyle }}
      ></i>
      <div className="hiddenparent" style={{ display: displayStyle }}>
        <div className="leftDiv"></div>
        <div className="navsidebar">
          <div className="content">
            <ul>
              <div className="navaddress1 navborder">
                <div className="addicon">
                  <i className="fa-solid fa-location-dot"></i>
                  <p className="loc">GPS Location</p>
                </div>
              </div>

              <div className="language1">
                <img
                  src={require("C:/eCommerce_web/my-app/src/Images/india.png")}
                  alt="flag"
                  className="imgflag"
                />
                <select className="langselect" name="" id="">
                  <option value="">EN</option>
                </select>
              </div>
              <div className="signin1 navborder">
                <p>
                  <span>Hello, sign in</span>
                </p>

                <p className="signbox">Accounts & Lists</p>
              </div>
              <div className="signin1 navborder">
                <p>
                  <span>Return</span>
                </p>

                <p className="signbox">& Orders</p>
              </div>
              <div className="navcart1 navborder">
                <i className="fa-solid fa-cart-shopping"></i>
                Cart
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="navsidebar" style={{ display: displayStyle }}>
        <div className="content">
          <ul>
            <div className="navaddress1 navborder">
              <div className="addicon">
                <i className="fa-solid fa-location-dot"></i>
                <p className="loc">GPS Location</p>
              </div>
            </div>

            <div className="language1">
              <img
                src={require("C:/eCommerce_web/my-app/src/Images/india.png")}
                alt="flag"
                className="imgflag"
              />
              <select className="langselect" name="" id="">
                <option value="">EN</option>
              </select>
            </div>
            <div className="signin1 navborder">
              <p>
                <span>Hello, sign in</span>
              </p>

              <p className="signbox">Accounts & Lists</p>
            </div>
            <div className="signin1 navborder">
              <p>
                <span>Return</span>
              </p>

              <p className="signbox">& Orders</p>
            </div>
            <div className="navcart1 navborder">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </div>
          </ul>
        </div>
      </div>

      {/* navbar */}

      <header>
        <div className="navbar1">
          <div className="navlogo navborder">
            <div className="logo">
              <h3>Navbar</h3>
            </div>
          </div>
          <div className="navaddress navborder">
            <div className="addicon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="loc">GPS Location</p>
            </div>
          </div>
          <div className="navsearch">
            <select className="searchselect" name="" id="">
              <option value="">All</option>
              <option value="">Fashion</option>
              <option value="">Electronics</option>
              <option value="">Home & Kitchen</option>
              <option value="">Gift ideas</option>
            </select>
            <input className="searchinput" placeholder="search" />
            {/* <div className="searchicon">
              <i className="fa-solid fa-magnifying-glass"></i>
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
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </div>
          <div className="menu">
            <i className="fa-solid fa-bars menu" onClick={displaySidebar}></i>
          </div>
        </div>

        {/* panel */}

        <div className="panel">
          <div className="all">
            <i className="fa-solid fa-bars" onClick={displayAllbar}></i>
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

import { Action } from "@remix-run/router";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbarstyle1.css";

export default function Navbar({ cartItems, searchFilter }) {
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
      {/* sidebar */}
      <div className="sidebarParent" style={{ display: Allbar }}>
        <div className="sidebar">
          <div className="hdn-head">
            <Link to="/sign">
              {" "}
              <h2>Hello, sign in</h2>
            </Link>
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

      {/* menubar */}
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
              {/* <div className="navaddress1 navborder">
                <div className="addicon">
                  <i className="fa-solid fa-location-dot"></i>
                  <p className="loc">GPS Location</p>
                </div>
              </div> */}

              <div className="language1">
                <img
                  src={require("C:/MyFolder/eCommerce_web/my-app/src/Images/india.png")}
                  alt="flag"
                  className="imgflag"
                />
                <select className="langselect" name="" id="">
                  <option value="">EN</option>
                </select>
              </div>
              <Link to="/sign">
                <div className="signin1 navborder">
                  Hello, sign in
                  <p className="signbox">Accounts & Lists</p>
                </div>
              </Link>
              <div className="signin1 navborder">
                <p>
                  <span>Return</span>
                </p>

                <p className="signbox">& Orders</p>
              </div>
              <Link to="/cart">
                <div className="navcart1 navborder">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Cart
                </div>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* navbar */}

      <header>
        <div className="navbar1 fixed-top">
          <div className="navlogo navborder">
            <div className="logo">
              <img
                src={require("C:/MyFolder/eCommerce_web/my-app/src/Images/apple-touch-icon.png")}
                alt=""
                className="imgLogo"
              />
            </div>
          </div>
          {/* <div className="navaddress navborder">
            <div className="addicon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="loc">GPS Location</p>
            </div>
          </div> */}

          <div className="navsearch">
            <select className="searchselect" name="" id="">
              <option value="">All</option>
              <option value="">Fashion</option>
              <option value="">Electronics</option>
              <option value="">Home & Kitchen</option>
              <option value="">Gift ideas</option>
            </select>
            <input
              className="searchinput"
              placeholder="search"
              onChange={searchFilter}
            />
          </div>
          <div className="language">
            <img
              src={require("C:/MyFolder/eCommerce_web/my-app/src/Images/india.png")}
              alt="flag"
              className="imgflag"
            />
            <select className="langselect" name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          <div className="signin navborder">
            <Link to="/sign">Hello, sign in</Link>

            <p className="signbox">Accounts & Lists</p>
          </div>
          <div className="signin navborder">
            <p>
              <span>Return</span>
            </p>

            <p className="signbox">& Orders</p>
          </div>
          <div className="navcart">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="cart-total">{cartItems.length}</span>
              Cart
            </Link>
          </div>
          <div className="menu">
            <i className="fa-solid fa-bars menu" onClick={displaySidebar}></i>
          </div>
        </div>

        {/* panel */}

        <div className="panel ">
          <div className="all">
            <i className="fa-solid fa-bars" onClick={displayAllbar}></i>
            <div>
              <Link to="/" className="all-link">
                <i className="fa-solid fa-house panelHome"></i> Home
              </Link>
            </div>
            <Link to="/products" className="all-link">
              {" "}
              All Products
            </Link>
          </div>
          {/* <div className="panelops">
            <p>Best Sellers</p>
            <p>Today's deals</p>
            <p>Mobiles</p>
            <p>Home & Kitchen</p>
            <p>Gift Ideas</p>
            <p>Fashion</p>
          </div>
          <div className="paneldeals">
            New Launches from Mobiles,electronics & more | Shop now
          </div> */}
        </div>
      </header>
    </div>
  );
}

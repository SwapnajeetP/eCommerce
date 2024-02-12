import React from "react";

export default function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border border-black">
        <div className="container-fluid">
          <a className="navbar-brand mx-5" href="#">
            <img
              src={require("C:/eCommerce_react/my-app/src/Images/menu.png")}
              alt="menu"
              width="25"
              height="25"
              style={{ marginRight: "10px" }}
            />
            <b>All</b>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ fontSize: "20px" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Best Sellers
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Today's deals
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Mobiles
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Home & Kitchen
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Gift Ideas
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Fashion
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  New Launches from Mobiles,Electronics & more | shop now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

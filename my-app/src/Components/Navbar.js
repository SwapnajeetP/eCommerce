import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-5" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginTop: "20px" }}>
                <a className="navbar-brand mx-3" href="#">
                  <img
                    src={require("C:/eCommerce_react/my-app/src/Images/location.png")}
                    alt="Location"
                    width="27"
                    height="27"
                    className="d-inline-block align-text-top"
                  />
                  GPS Location
                </a>
              </li>

              <form className="d-flex p-3" role="search" id="navBarSearch">
                <input
                  className="form-control me-2 mx-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "800px" }}
                />
              </form>
              <li className="nav-item mt-3">
                <img
                  src={require("C:/eCommerce_react/my-app/src/Images/india.png")}
                  alt="flag"
                  width="35"
                  height="30"
                />
              </li>
              <div className="dropdown mt-2">
                <button
                  className="btn btn-secondary dropdown-toggle bg-dark border-dark"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      EN-UK
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      EN-US
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      EN-IN
                    </a>
                  </li>
                </ul>
              </div>
              <li className="nav-item mx-5">
                <a
                  className="nav-link"
                  href="#"
                  style={{ fontSize: "15px", color: "white" }}
                >
                  Hello, Sign in
                  <br />
                  Account
                </a>
              </li>
              <li
                className="nav-item "
                style={{ marginTop: "15px", marginLeft: "30px" }}
              >
                <img
                  src={require("C:/eCommerce_react/my-app/src/Images/cart.png")}
                  alt="cart"
                  width="38"
                  height="33"
                />
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{
                    "font-size": "15px",
                    color: "white",
                    marginTop: "15px",
                  }}
                >
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

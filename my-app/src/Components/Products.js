import React, { useState } from "react";
import "./Productsstyle.css";

export default function Products({ filterprod, handleAdd, filterItem }) {
  const [home, setHome] = useState(true);
  const [clothes, setClothes] = useState(true);
  const [electronics, setElectronics] = useState(true);
  const [decor, setDecor] = useState(true);
  const [utility, setUtility] = useState(true);

  const handleCheck = (data) => {
    if (data === "home") {
      if (home == true) {
        filterItem(data);
      } else {
        setHome(false);
      }
    }

    if (data === "clothes") {
      if (clothes == true) {
        filterItem(data);
      } else {
        setClothes(false);
      }
    }

    if (data === "electronics") {
      if (electronics == true) {
        filterItem(data);
      } else {
        setElectronics(false);
      }
    }

    if (data === "decor") {
      if (decor == true) {
        filterItem(data);
      } else {
        setDecor(false);
      }
    }

    if (data === "utility") {
      if (utility == true) {
        filterItem(data);
      } else {
        setUtility(false);
      }
    }
  };

  return (
    <>
      {/* <div className="catBtn">
        <button
          className="btn btn-secondary filterbtn"
          onClick={() => filterItem("home")}
        >
          Home Usage
        </button>
        <button
          className="btn btn-secondary filterbtn"
          onClick={() => filterItem("clothes")}
        >
          Clothes
        </button>
        <button
          className="btn btn-secondary filterbtn"
          onClick={() => filterItem("electronics")}
        >
          Electronics
        </button>
        <button
          className="btn btn-secondary filterbtn"
          onClick={() => filterItem("decor")}
        >
          Decoration
        </button>
        <button
          className="btn btn-secondary filterbtn"
          onClick={() => filterItem("utility")}
        >
          Utility
        </button>
      </div> */}
      <div className="leftProduct">
        <input
          type="checkbox"
          value={home}
          onChange={() => handleCheck("home")}
        />{" "}
        Home <br />
        <input
          type="checkbox"
          value={clothes}
          onChange={() => handleCheck("clothes")}
        />{" "}
        Clothes <br />
        <input
          type="checkbox"
          value={electronics}
          onChange={() => handleCheck("electronics")}
        />{" "}
        Electronics <br />
        <input
          type="checkbox"
          value={decor}
          onChange={() => handleCheck("decor")}
        />{" "}
        Decoration <br />
        <input
          type="checkbox"
          value={utility}
          onChange={() => handleCheck("utility")}
        />{" "}
        Utility <br />
      </div>
      <div className="shop-section">
        {filterprod.map((productItems) => (
          <div className="box1s box">
            <div className="box-img">
              <img src={productItems.img} alt="" className="img1" />
            </div>
            <div className="box-title">
              <span className="featuretext"> {productItems.name} </span>
            </div>
            <div className="box-border">
              <div className="rateDiv">
                <span className="star rated">{productItems.rating}</span>
                <span className="star rated">{productItems.rating}</span>
                <span className="star rated">{productItems.rating}</span>
                <span className="star unrated">{productItems.rating}</span>
                <span className="star unrated">{productItems.rating}</span>
                <span className="num">(679)</span>
              </div>
              <hr className="hrline" />

              <div className="price">
                <span className="fnt">${productItems.price}</span>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-secondary w-100 addCartbtn"
                  onClick={() => handleAdd(productItems)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

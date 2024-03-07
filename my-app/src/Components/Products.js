import React from "react";
import "./Productsstyle.css";

export default function Products({ filterprod, handleAdd, filterItem }) {
  return (
    <>
      <div className="catBtn">
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

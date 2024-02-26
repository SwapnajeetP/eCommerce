import React from "react";
import "./ShopSecstyle.css";
export default function ShopSection({ productItems, handleAdd }) {
  return (
    <>
      {/* first section of cards */}
      <div className="divttl">
        <h1 className="card1-ttl">Category List</h1>
      </div>

      <div className="shop-section">
        {productItems.slice(0, 3).map((productItems) => (
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

      {/* Second section of cards */}

      <div className="divttl">
        <h1 className="card1-ttl">Our latest arrivals</h1>
      </div>

      <div className="shop-section">
        {productItems.slice(3, 9).map((productItems) => (
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

      {/*section of small cards */}

      <div className="divttl">
        <h1 className="card1-ttl">Dive into tech mode</h1>
      </div>
      <div className="shop-section2">
        {productItems.slice(9, 17).map((productItems) => (
          <div className="box1s box-small">
            <div className="box-img">
              <img src={productItems.img} alt="" className="img2" />
            </div>
            <div className="box-title">
              <span className="featuretext"> {productItems.name} </span>
            </div>
            <div className="box-border">
              <div className="rateDiv">
                <span className="star-small rated">{productItems.rating}</span>
                <span className="star-small rated">{productItems.rating}</span>
                <span className="star-small rated">{productItems.rating}</span>
                <span className="star-small unrated">
                  {productItems.rating}
                </span>
                <span className="star-small unrated">
                  {productItems.rating}
                </span>
                <span className="num-small">(679)</span>
              </div>
              <hr className="hrline" />

              <div className="price">
                <span className="fnt-small">${productItems.price}</span>
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

      {/* Section of bottom cards */}

      <div className="shop-section3">
        {productItems.slice(17, 19).map((productItems) => (
          <div className="box1s box-btm">
            <div className="box-img">
              <img src={productItems.img} alt="" className="img3" />
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

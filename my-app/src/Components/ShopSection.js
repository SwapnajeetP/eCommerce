import React from "react";
import "./ShopSecstyle.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShopSection({ productItems, handleAdd }) {
  const notify = () => {
    toast.success("Item added to cart", {
      position: "top-center",
    });
  };
  return (
    <>
      {/* first section of cards */}
      <div className="divttl">
        <h1 className="card1-ttl">Category List</h1>
      </div>
      <div className="container1">
        <div className="shop-section1">
          {productItems.slice(0, 3).map((productItems) => (
            <div className="box-up" key={productItems.id}>
              <Link to={`/singleproduct/${productItems.id}`}>
                <div className="box-img">
                  <img src={productItems.img} alt="" className="img1" />
                </div>
              </Link>
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
                  <span className="fnt">Rs.{productItems.price}</span>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary w-100 addCartbtn"
                    onClick={() => {
                      handleAdd(productItems);
                      notify();
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second section of cards */}

      <div className="divttl">
        <h1 className="card1-ttl">Our latest arrivals</h1>
      </div>
      <div className="container1">
        <div className="shop-section1">
          {productItems.slice(3, 9).map((productItems) => (
            <div className="box-up" key={productItems.id}>
              <Link to={`/singleproduct/${productItems.id}`}>
                <div className="box-img">
                  <img src={productItems.img} alt="" className="img1" />
                </div>
              </Link>
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
                  <span className="fnt">Rs.{productItems.price}</span>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary w-100 addCartbtn"
                    onClick={() => {
                      handleAdd(productItems);
                      notify();
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*section of small cards */}

      <div className="divttl">
        <h1 className="card1-ttl">Dive into tech mode</h1>
      </div>
      <div className="container1">
        <div className="shop-section2">
          {productItems.slice(9, 17).map((productItems) => (
            <div className="box-small" key={productItems.id}>
              <Link to={`/singleproduct/${productItems.id}`}>
                <div className="box-img">
                  <img src={productItems.img} alt="" className="img2" />
                </div>
              </Link>
              <div className="box-title">
                <span className="featuretext"> {productItems.name} </span>
              </div>
              <div className="box-border">
                <div className="rateDiv">
                  <span className="star-small rated">
                    {productItems.rating}
                  </span>
                  <span className="star-small rated">
                    {productItems.rating}
                  </span>
                  <span className="star-small rated">
                    {productItems.rating}
                  </span>
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
                  <span className="fnt-small">Rs.{productItems.price}</span>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary w-100 addCartbtn"
                    onClick={() => {
                      handleAdd(productItems);
                      notify();
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section of bottom cards */}
      <div className="container1">
        <div className="shop-section3">
          {productItems.slice(17, 19).map((productItems) => (
            <div className="box-btm" key={productItems.id}>
              <Link to={`/singleproduct/${productItems.id}`}>
                <div className="box-img">
                  <img src={productItems.img} alt="" className="img3" />
                </div>
              </Link>
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
                  <span className="fnt">Rs.{productItems.price}</span>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary w-100 addCartbtn"
                    onClick={() => {
                      handleAdd(productItems);
                      notify();
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
}

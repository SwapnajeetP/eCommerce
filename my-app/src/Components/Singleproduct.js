import React from "react";
import "./SinglePStyle.css";
import { useParams } from "react-router";

export default function Singleproduct({ productItems, handleAdd }) {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      {productItems.map((item) => {
        if (item.id === id) {
          return (
            <>
              <div className="mainProd">
                <div className="singleLeft">
                  <img className="singleImg" src={item.img} alt="" />
                </div>
                <div className="singleRight">
                  <h1>{item.name}</h1>
                  <div className="rateDiv">
                    <span className="star rated">{item.rating}</span>
                    <span className="star rated">{item.rating}</span>
                    <span className="star rated">{item.rating}</span>
                    <span className="star unrated">{item.rating}</span>
                    <span className="star unrated">{item.rating}</span>
                    <span className="num">(679)</span>
                  </div>
                  <hr />
                  <div>
                    <h6>Limited time deal</h6>
                    <br />
                    <h3>Rs.{item.price}</h3>
                    <h5>Inclusive of all taxes</h5>
                  </div>

                  <hr />

                  <br />
                  <div>
                    <button
                      type="button"
                      className="btn btn-secondary w-100 addCBtn"
                      onClick={() => handleAdd(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        }
        return null;
      })}
    </div>
  );
}

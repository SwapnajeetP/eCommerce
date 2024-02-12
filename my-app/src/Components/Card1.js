import React from "react";
import "./Cardstyle.css";
export default function Card1() {
  return (
    <>
      <div className="divttl">
        <h1 className="card1-ttl">
          <b />
          Category List
          <b />
        </h1>
      </div>
      <div className="priceCard">
        <div className="card card1line1">
          <img
            src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <h4 className="card-title">
              Featured <br />
              Product title
            </h4>
          </div>
          <div className="border">
            <div className="rateDiv">
              <span className="star rated">★</span>
              <span className="star rated">★</span>
              <span className="star rated">★</span>
              <span className="star unrated">★</span>
              <span className="star unrated">★</span>
              <span className="num">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt">$40.89</span>
            </div>
          </div>
        </div>
        {/* second card */}
        <div className="card card2line1 ">
          <img
            src="https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1683641323.jpg"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <h4 className="card-title">
              Featured <br />
              Product title
            </h4>
          </div>
          <div className="border">
            <div className="rateDiv">
              <span className="star rated">★</span>
              <span className="star rated">★</span>
              <span className="star rated">★</span>
              <span className="star unrated">★</span>
              <span className="star unrated">★</span>
              <span className="num">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt">$40.89</span>
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div className="card card3line1">
          <img
            src="https://m.media-amazon.com/images/I/81o+BjfSuDS._SL1500_.jpg"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <h4 className="card-title">
              Featured <br />
              Product title
            </h4>
          </div>
          <div className="border">
            <div className="rateDiv">
              <span className="star rated">★</span>
              <span className="star rated">★</span>
              <span className="star rated">★</span>
              <span className="star unrated">★</span>
              <span className="star unrated">★</span>
              <span className="num">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt">$40.89</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

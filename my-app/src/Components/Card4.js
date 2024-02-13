import React from "react";
import "./Cardstyle4.css";
export default function Card4() {
  return (
    <div>
      <div className="priceCardbtm">
        <div className="card cardbtm1">
          <img
            src="https://blogscdn.thehut.net/app/uploads/sites/1356/2020/10/pots-planters-bskets-bg-header-960x480-1_1603356754.jpg"
            className="card-img-top img-btm"
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
        <div className="card cardbtm2">
          <img
            src="https://www.mydomaine.com/thmb/u2hjlGv8Ft55BX5xLTvmEpuYd6A=/2048x0/filters:no_upscale():strip_icc()/961754_b95339be5dfb4c4aa6070fa38660263d_mv2-a2719069ad874821b83cf35487dd8f4e.jpg"
            className="card-img-top img-btm"
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
    </div>
  );
}

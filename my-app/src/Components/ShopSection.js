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
        {productItems.map((productItems) => (
          <div className="box1s box">
            <div className="box-img">
              <img src={productItems.img} alt="" className="img1" />
            </div>
            <div>
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
      {/* <div className="shop-section">
        <div className="box1s box">
          <div className="box-img">
            <img
              src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="img1"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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
        <div className="box2s box">
          <div className="box-img">
            <img
              src="https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1683641323.jpg"
              alt=""
              className="img1"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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
        <div className="box3s box">
          <div className="box-img">
            <img
              src="https://m.media-amazon.com/images/I/81o+BjfSuDS._SL1500_.jpg"
              alt=""
              className="img1"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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
      </div> */}
      {/* Second section of cards */}
      <div className="divttl">
        <h1 className="card1-ttl">Our latest arrivals</h1>
      </div>
      <div className="shop-section">
        <div className="box1s box">
          <div className="box-img">
            <img
              src="https://image.lampsplus.com/is/image/b9gt8/7y687cropped.jpg?qlt=70&wid=1200&hei=1200&fmt=jpeg"
              alt=""
              className="img1"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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
        <div className="box2s box">
          <div className="box-img">
            <img
              src="https://down-ph.img.susercontent.com/file/cbd8e751d1e20e0dbdf8aca764411989"
              alt=""
              className="img1"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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
        <div className="box3s box">
          <div className="box-img">
            <img
              src="https://homafy.com/wp-content/uploads/2020/07/WhatsApp-Image-2022-04-11-at-12.02.33-PM-1.jpeg"
              alt=""
              className="img1"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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

      {/* 3rd section of cards  */}

      <div className="shop-section">
        <div className="box1s box">
          <div className="box-img">
            <img
              src="https://images.unsplash.com/photo-1581166397057-235af2b3c6dd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NyZXdkcml2ZXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="img1"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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
        <div className="box2s box">
          <div className="box-img">
            <img
              src="https://m.media-amazon.com/images/I/710oliXPPuL._AC_UF1000,1000_QL80_.jpg"
              alt=""
              className="img1"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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
        <div className="box3s box">
          <div className="box-img">
            <img
              src="https://static.toiimg.com/photo/88010588.cms"
              alt=""
              className="img1"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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

      {/*section of small cards */}

      <div className="divttl">
        <h1 className="card1-ttl">Dive into tech mode</h1>
      </div>

      <div className="shop-section2">
        {/* card1 */}

        <div className="box1 box-small">
          <div className="box-img">
            <img
              src="https://static.toiimg.com/photo/88010588.cms"
              alt=""
              className="img2"
            />
          </div>
          <div>
            <span className="featuretext featuretext-small"> Featured </span>
            <p className="featuretext featuretext-small">Product Title</p>
          </div>
          <div className="box-border">
            <div className="rateDiv">
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small unrated">★</span>
              <span className="star-small unrated">★</span>
              <span className="num-small">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt-small strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt-small">$40.89</span>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="box2 box-small">
          <div className="box-img">
            <img
              src="https://localnation.co.in/cdn/shop/products/M7AWOj3B4P.jpg?v=1677657827&width=713"
              alt=""
              className="img2"
            />
          </div>
          <div>
            <span className="featuretext featuretext-small"> Featured </span>
            <p className="featuretext featuretext-small">Product Title</p>
          </div>
          <div className="box-border">
            <div className="rateDiv">
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small unrated">★</span>
              <span className="star-small unrated">★</span>
              <span className="num-small">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt-small strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt-small">$40.89</span>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="box3 box-small">
          <div className="box-img">
            <img
              src="https://media.istockphoto.com/id/182691828/photo/bathroom-faucet.jpg?s=612x612&w=0&k=20&c=4erUeHXd06v50a9z6IPxx3LqG7oO6R2cig9hSaLPalI="
              alt=""
              className="img2"
            />
          </div>
          <div>
            <span className="featuretext featuretext-small"> Featured </span>
            <p className="featuretext  featuretext-small">Product Title</p>
          </div>
          <div className="box-border">
            <div className="rateDiv">
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small unrated">★</span>
              <span className="star-small unrated">★</span>
              <span className="num-small">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt-small strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt-small">$40.89</span>
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className="box4 box-small">
          <div className="box-img">
            <img
              src="https://png.pngtree.com/png-vector/20240119/ourlarge/pngtree-a-pair-of-sleek-bluetooth-headphones-delivering-premium-sound-quality-against-png-image_11455271.png"
              alt=""
              className="img2"
            />
          </div>
          <div>
            <span className="featuretext featuretext-small"> Featured </span>
            <p className="featuretext featuretext-small">Product Title</p>
          </div>
          <div className="box-border">
            <div className="rateDiv">
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small unrated">★</span>
              <span className="star-small unrated">★</span>
              <span className="num-small">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt-small strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt-small">$40.89</span>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-section2">
        {/* card5 */}

        <div className="box1 box-small">
          <div className="box-img">
            <img
              src="https://www.orra.co.in/media/catalog/product/cache/a062e776095ada03f265202079309f18/o/s/osn22145_2.jpg"
              alt=""
              className="img2"
            />
          </div>
          <div>
            <span className="featuretext featuretext-small"> Featured </span>
            <p className="featuretext featuretext-small">Product Title</p>
          </div>
          <div className="box-border">
            <div className="rateDiv">
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small unrated">★</span>
              <span className="star-small unrated">★</span>
              <span className="num-small">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt-small strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt-small">$40.89</span>
            </div>
          </div>
        </div>

        {/* card6 */}
        <div className="box2 box-small">
          <div className="box-img">
            <img
              src="https://www.shutterstock.com/image-photo/elephant-deer-sitaram-copper-brass-600nw-2409798561.jpg"
              alt=""
              className="img2"
            />
          </div>
          <div>
            <span className="featuretext featuretext-small"> Featured </span>
            <p className="featuretext featuretext-small">Product Title</p>
          </div>
          <div className="box-border">
            <div className="rateDiv">
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small unrated">★</span>
              <span className="star-small unrated">★</span>
              <span className="num-small">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt-small strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt-small">$40.89</span>
            </div>
          </div>
        </div>
        {/* card7 */}
        <div className="box3 box-small">
          <div className="box-img">
            <img
              src="https://media.istockphoto.com/id/136398161/photo/coconut-oil.jpg?s=612x612&w=0&k=20&c=OdD4WZiuEMoO1BdokHH_3MSsyJ6f02bSZJa2Ybxv6p8="
              alt=""
              className="img2"
            />
          </div>
          <div>
            <span className="featuretext featuretext-small"> Featured </span>
            <p className="featuretext featuretext-small">Product Title</p>
          </div>
          <div className="box-border">
            <div className="rateDiv">
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small unrated">★</span>
              <span className="star-small unrated">★</span>
              <span className="num-small">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt-small strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt-small">$40.89</span>
            </div>
          </div>
        </div>
        {/* card8 */}
        <div className="box4 box-small">
          <div className="box-img">
            <img
              src="https://www.fnp.com/images/pr/l/v20221205202803/chocolate-rose-designer-cake-half-kg_1.jpg"
              alt=""
              className="img2"
            />
          </div>
          <div>
            <span className="featuretext featuretext-small"> Featured </span>
            <p className="featuretext featuretext-small">Product Title</p>
          </div>
          <div className="box-border">
            <div className="rateDiv">
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small rated">★</span>
              <span className="star-small unrated">★</span>
              <span className="star-small unrated">★</span>
              <span className="num-small">(679)</span>
            </div>
            <hr className="hrline" />
            <div className="price">
              <span className="fnt-small strikeprice">
                <s>$35.90</s>
              </span>{" "}
              <span className="fnt-small">$40.89</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section of bottom cards */}

      <div className="shop-section3">
        {/* btmCard1 */}
        <div className="box1 box-btm">
          <div className="box-img">
            <img
              src="https://blogscdn.thehut.net/app/uploads/sites/1356/2020/10/pots-planters-bskets-bg-header-960x480-1_1603356754.jpg"
              alt=""
              className="img3"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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

        {/* btmCard2 */}
        <div className="box2 box-btm">
          <div className="box-img">
            <img
              src="https://www.mydomaine.com/thmb/u2hjlGv8Ft55BX5xLTvmEpuYd6A=/2048x0/filters:no_upscale():strip_icc()/961754_b95339be5dfb4c4aa6070fa38660263d_mv2-a2719069ad874821b83cf35487dd8f4e.jpg"
              alt=""
              className="img3"
            />
          </div>
          <div>
            <span className="featuretext"> Featured </span>
            <p className="featuretext">Product Title</p>
          </div>
          <div className="box-border">
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

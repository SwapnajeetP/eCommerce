import "./Slide.css";
import React from "react";

export default function slideBar() {
  return (
    <div className="slideDiv">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-vector/realistic-3d-sale-background_52683-62689.jpg?w=1380&t=st=1707278882~exp=1707279482~hmac=d36cd25aa616459afe9e5ab11153a690821626f73a1b24c23ec9c0ee6ed18a4f"
              className="d-block w-100 c-img"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-psd/super-sale-banner_1393-365.jpg?1&w=1380&t=st=1707278135~exp=1707278735~hmac=ac973055bd9b1b003a0dde743e0196d8933a61e7cbf4161dc0494b0400810603"
              className="d-block w-100 c-img"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-vector/flat-sale-background_23-2148942895.jpg?w=1380&t=st=1707278171~exp=1707278771~hmac=5832b48b7c01bf41a46c902407a36325287631603bbc8d11be356e90b8670c1a"
              className="d-block w-100 c-img"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="rightDiv">
        <div>
          <h2 className="h2ttl">
            Under 700 | Combo Pack|
            <br />
            Multiple Brand & <br />
            Much More
          </h2>
        </div>
        <div className="divRightBottom">
          <img
            src="https://apparelresources.com/wp-content/uploads/2023/03/lead-Private-Vs-National-min.jpg"
            alt=""
            className="imgSale"
          />
          <div>
            <a href="#" className="anchor">
              See all offers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

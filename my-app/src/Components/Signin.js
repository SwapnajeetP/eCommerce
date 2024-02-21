import React from "react";
import "./Signinstyle.css";
export default function Signin() {
  return (
    <>
      <dsiv className="mainDiv">
        <div className="logo">Login Page</div>
        <div className="loginCard">
          <h1>Sign in</h1>
          <div className="userinput">
            <label htmlFor="">Email or mobile phone number</label>
            <input type="email" className="user-in" />
            <label htmlFor="">Password</label>
            <input type="password" className="user-in" />
          </div>
          <div className="btncon">
            <button type="button" className="btn btn-success">
              Continue
            </button>
            <div className="legaltxt">
              By continuing, you agree to our <a href="#">Conditions of Use</a>{" "}
              and <a href="">Privacy Notice</a>
            </div>
          </div>
          <div className="help">
            <i className="fa-solid fa-angle-right"></i>
            <a href="">
              <span>Need help?</span>
            </a>
          </div>

          <hr />
          <div className="cardbtm">
            forgot username?
            <a href="">
              <span>Click here</span>
            </a>
          </div>
        </div>
        <div className="divbtm">
          <span>New user?</span>
          <button type="button" className="btn btn-outline-dark">
            Create your account
          </button>
        </div>
        {/* <div className="gradient"></div> */}
      </dsiv>
    </>
  );
}

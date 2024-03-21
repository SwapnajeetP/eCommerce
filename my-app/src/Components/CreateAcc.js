import React from "react";
import "./CreateAccstyle.css";
import { Link } from "react-router-dom";

import { Component } from "react";

export default class CreateAcc extends Component {
  render() {
    return (
      <div>
        <div className="mainContainer">
          <div className="login-container">
            <div className="item-grid item-1">
              <h4>Create Account</h4>
            </div>
            <div className="item-grid item-2">
              <label htmlFor="">Your name</label>
            </div>
            <div className="item-grid item-3">
              <input type="text" placeholder="First and Last name" />
            </div>
            <div className="item-grid item-4">
              <label htmlFor="">Mobile number</label>
            </div>
            <div className="item-grid item-5">
              <input type="text" value="+91" />
            </div>
            <div className="item-grid item-14">
              <input type="text" placeholder="Mobile Number" />
            </div>
            <div className="item-grid item-6">
              <label htmlFor="" autoComplete="off">
                Email Id
              </label>
            </div>
            <div className="item-grid item-7">
              <input type="email" placeholder="Email" />
            </div>
            <div className="item-grid item-8">
              <label htmlFor="">Password</label>
            </div>
            <div className="item-grid item-9">
              <input type="password" placeholder="Password" />
            </div>
            <div className="item-grid item-10">
              <label htmlFor="">Confirm Password</label>
            </div>
            <div className="item-grid item-11">
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="item-grid item-12">
              <button type="button" className="btn btn-success btn-acc">
                Create Account
              </button>
            </div>
            <div className="item-grid item-13">
              Already have an account?{" "}
              <Link className="signLink" to="/sign">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

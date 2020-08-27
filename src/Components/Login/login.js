import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

class CheckOut extends Component {
  render() {
    return (
      <div className="login">
        <div className="container" style={{ height: "90%", padding: "15px" }}>
          <div className="base-container">
            <div className="h3">Customer Login</div>
            <div className="content">
              <br />
              <p className="h6">
                If you have an account, sign in with your email address.
              </p>
              <div className="form">
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="Name">Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="Pasword">Password</label>
                  <br />
                  <input
                    type="text"
                    name="pwd"
                    placeholder=""
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="footer">
                  <a href="#">
                    <p className="text-right">Forgot Password?</p>
                  </a>
                  <br />
                  <Link to="/">
                    <button type="submit" className="btn1">
                      Sign in
                    </button>
                  </Link>
                  <Link className="p-3" to="/register">
                    <button type="submit" className="btn1">
                      SignUp
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;

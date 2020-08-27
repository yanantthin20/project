import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

class CheckOut extends Component {
  render() {
    return (
      <div className="login">
        <div className="container" style={{ height: "90%", padding: "15px" }}>
          <div className="base-container">
            <div className="h3">User Registration</div>
            <div className="content">
              <div className="form">
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor=" First Name">First Name</label>
                  <br />
                  <input
                    type="text"
                    name="Fname"
                    placeholder=" First name"
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="Last Name">Last Name</label>
                  <br />
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="Email">Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="pwd">Password</label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="pwd">Confirm Password</label>
                  <br />
                  <input
                    type="text"
                    name="password1"
                    placeholder="Confirm Password"
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="footer">
                  <Link to="/login">
                    <button type="submit" className="btn1">
                      Register
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

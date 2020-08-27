import React, { Component } from "react";
import "../Login/style.scss";
import { Link } from "react-router-dom";

class CheckOut extends Component {
  render() {
    return (
      <div className="login">
        <div className="container" style={{ height: "90%", padding: "15px" }}>
          <div className="base-container">
            <div className="h3">CheckOut</div>
            <div className="content">
              <div className="form">
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="fullname">Fullname</label>
                  <br />
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Name"
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="phone">Phone</label>
                  <br />
                  <input
                    type="text"
                    name="phone"
                    placeholder="+959..."
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="addr">Address</label>
                  <br />
                  <input
                    type="text"
                    name="addr"
                    placeholder="Address"
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 10 }}>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    style={{ marginBottom: 10 }}
                    required
                  />
                </div>
                <div className="footer">
                  <Link to="/">
                    <button type="submit" className="btn1">
                      Confirm
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

import React, { useState, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import data from "./../data";
import Button from "@material-ui/core/Button";
import {
  ShoppingCart,
  Home,
  AccountCircle,
  SearchRounded,
} from "@material-ui/icons";
import styled from "styled-components";
import DropDownMenu from "./Fragment/DropDownMenu";
export default function Navbar(props) {
  const [search, setSearch] = useState("");
  const myChangeHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
      {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
          Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk  */}
      {/* <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link> */}
      <DropDownMenu />
      <div className="h2 p-3">
        Youth
        <Link to="/" className="nav-item ml-5">
          <Home style={{ color: "white" }} />
        </Link>
      </div>
      <input
        className="form-control ml-auto w-25 p-2"
        type="text"
        name="search"
        //ref={(c) => (this.search = c)}
        placeholder="Search"
        aria-label="Search"
        onChange={myChangeHandler}
      ></input>
      <Link to={"/search/" + search}>
        <Button className="btnSearch">
          <SearchRounded style={{ color: "black" }} />
        </Button>
      </Link>
      <div className="p-2">
        <Link to="/login" className="nav-item ml-5">
          <AccountCircle style={{ color: "white" }} />
        </Link>
        <Link to="/cart" className="nav-item ml-5">
          <ShoppingCart style={{ color: "white" }} />
        </Link>
      </div>
    </NavWrapper>
  );
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .form-control {
    width: 40%;
  }
`;

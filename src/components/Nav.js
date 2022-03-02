import React from "react";
import "../components/styles/Nav.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Nav = ({ isSideBarOpen, setSideBarOpen }) => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img
            className="nav__linkImg"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>
      <div className="nav__links">
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model X</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panel</Link>
      </div>
      <div className="nav__end">
        <Link to="/" className={isSideBarOpen && "nav__endlink--hidden"}>
          Shop
        </Link>
        <Link to="/login" className={isSideBarOpen && "nav__endlink--hidden"}>
          Tesla Account
        </Link>
        <div
          className="nav__sidebar"
          onClick={() => setSideBarOpen(!isSideBarOpen)}
        >
          {isSideBarOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};

export default Nav;

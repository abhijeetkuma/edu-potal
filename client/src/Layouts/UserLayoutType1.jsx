import React from "react";
import PropTypes from "prop-types";
import { Outlet, NavLink, Link } from "react-router-dom";

import logo from "/images/logo.png";
import "./layoutType1.css";

function UserLayoutType1(props) {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Edu Potal" />
        </div>
        <div className="profile">
          <Link to="/login">Logout</Link>
        </div>
      </header>
      <div className="">
        <div>
          <h1>Welcome to the main page.</h1>
        </div>
        <div className="main-contents w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

UserLayoutType1.propTypes = {};

export default UserLayoutType1;

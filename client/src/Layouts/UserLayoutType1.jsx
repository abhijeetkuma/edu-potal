import React from "react";
import PropTypes from "prop-types";
import { Outlet, NavLink, Link } from "react-router-dom";

import Header from "../Pages/website/commonComps/Header";
import Footer from "../Pages/website/commonComps/Footer";
import "./userLayoutType1.css";

function UserLayoutType1(props) {
  return (
    <>
      <Header />
      <div className="website-wrapper">
        <div className="main-contents w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

UserLayoutType1.propTypes = {};

export default UserLayoutType1;

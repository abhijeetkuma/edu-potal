import React from "react";
import PropTypes from "prop-types";
import { Outlet, NavLink, Link } from "react-router-dom";

import logo from "/images/logo.png";
import "./userLayoutType1.css";

function UserLayoutType1(props) {
  return (
    <>
      <header className="website-wrapper">
        <div className="logo">
          <img src={logo} alt="Edu Potal" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to={`/`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/listing`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Collages
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Exams
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Cources
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Specializations
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                More
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="profile">
          <Link to="/login">Logout</Link>
        </div>
      </header>
      <div className="website-wrapper">
        <div className="main-contents w-full">
          <Outlet />
        </div>
      </div>
      <div className="website-wrapper">
        <footer className="footer">
          <div className="footer-menu">
            <nav>
              <ul>
                <li>
                  <NavLink
                    to={`/`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    Help
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    Terms & Conditions
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-lists">Footer List</div>
          <div className="copy-right">
            copyright &copy; 2024 All rights reserved!
          </div>
        </footer>
      </div>
    </>
  );
}

UserLayoutType1.propTypes = {};

export default UserLayoutType1;

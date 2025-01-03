import React from "react";
import PropTypes from "prop-types";
import { Outlet, NavLink, Link } from "react-router-dom";

import logo from "/images/logo.png";
import emailIcon from "/images/email-icon.svg";
import phoneIcon from "/images/phone-icon.svg";
import fbIcon from "/images/fb.svg";
import instaIcon from "/images/insta.svg";
import xIcon from "/images/x.svg";
import inIcon from "/images/linkdin.svg";
import "./userLayoutType1.css";

function UserLayoutType1(props) {
  return (
    <>
      <header className="website-wrapper">
        <div className="logo">
          <a href={`/`}>
            <img src={logo} alt="Edu Potal" />
          </a>
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
                Colleges
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/exams`}
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
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Study Goal
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                TOC Cafe
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="profile">
          {/* <Link to="/login">Login</Link> */}
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
                    to={`/cms/about-us`}
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
                    to={`/cms/privacy-policy`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <Link
                    to={`/cms/terms-conditions`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-lists">
            <div className="footer-links">
              <h3>Top Links</h3>
              <ul>
                <li>
                  <span>Top Engineering Collages</span>
                </li>
                <li>
                  <span>Top Medical Collages</span>
                </li>
                <li>
                  <span>Top Management Collages</span>
                </li>
                <li>
                  <span>Top Low Collages</span>
                </li>
                <li>
                  <span>Top Commerce Collages</span>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Top Courses</h3>
              <ul>
                <li>
                  <span>B.Tech/BE</span>
                </li>
                <li>
                  <span>MBA/PGDM</span>
                </li>
                <li>
                  <span>MCA</span>
                </li>
                <li>
                  <span>BCA</span>
                </li>
                <li>
                  <span>B.Sc</span>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Top Exams</h3>
              <ul>
                <li>
                  <span>GATE 2024</span>
                </li>
                <li>
                  <span>JEE-MAIN 2024</span>
                </li>
                <li>
                  <span>CAT 2024</span>
                </li>
                <li>
                  <span>NEET 2024</span>
                </li>
                <li>
                  <span>XAT 2024</span>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Latest Updates</h3>
              <ul>
                <li>
                  <span>GATE Admit Card 2024</span>
                </li>
                <li>
                  <span>NEET Application Form 2024</span>
                </li>
                <li>
                  <span>CTET Admit Card 2024</span>
                </li>
                <li>
                  <span>CUET Application Form 2024</span>
                </li>
                <li>
                  <span>UGC NET Result 2023</span>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <div className="social-media-links">
                <span>
                  <img src={fbIcon} alt="" />
                </span>
                <span>
                  <img src={instaIcon} alt="" />
                </span>
                <span>
                  <img src={xIcon} alt="" />
                </span>
                <span>
                  <img src={inIcon} alt="" />
                </span>
              </div>
              <p>
                Times of College 91st Floor, Ruparel Niwas, Valuiladha Road,
                Near Hera Mongi Hospital,Mulund West, Mumbai- 400080
              </p>
              <div className="contact">
                <img src={phoneIcon} alt="" fill="red" />
                <span>+91-9266424348</span>
              </div>
              <div className="contact">
                <img src={emailIcon} alt="" fill="red" />
                <span>info@timesofcollege.com</span>
              </div>
            </div>
          </div>
          <div className="copy-right">
            copyright &copy; {new Date().getFullYear()} All rights reserved!
          </div>
        </footer>
      </div>
    </>
  );
}

UserLayoutType1.propTypes = {};

export default UserLayoutType1;

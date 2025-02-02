import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import emailIcon from "/images/email-icon.svg";
import phoneIcon from "/images/phone-icon.svg";
import fbIcon from "/images/fb.svg";
import instaIcon from "/images/insta.svg";
import xIcon from "/images/x.svg";
import inIcon from "/images/linkdin.svg";
import axios from "axios";

function Footer(props) {
  const [adsdisplist, setAdsdisplistlist] = useState([]);
  useEffect(() => {
    axios
      .get("/api/ads/")
      .then((response) => {
        setAdsdisplistlist(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
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
                <li>
                  <Link
                    to={`/sitemap`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    Sitemap
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
                  <Link
                    to={`/categorywise/engineering-colleges`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>Top Engineering Colleges</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/categorywise/medical-colleges`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>Top Medical Colleges</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/categorywise/management1`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>Top Management Colleges</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/categorywise/law`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>Top Low Colleges</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/categorywise/commerce`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>Top Commerce Colleges</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Top Courses</h3>
              <ul>
                <li>
                  <Link
                    to={`/course/bebtech`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>B.Tech/BE</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/course/mba-pgdm`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>MBA/PGDM</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/course/mca`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>MCA</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/course/bca`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>BCA</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/course/bsc`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                  >
                    <span>B.Sc</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Top Exams</h3>
              <ul>
                <li>
                  <span>GATE 2025</span>
                </li>
                <li>
                  <span>JEE-MAIN 2025</span>
                </li>
                <li>
                  <span>CAT 2025</span>
                </li>
                <li>
                  <span>NEET 2025</span>
                </li>
                <li>
                  <span>XAT 2025</span>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Latest Updates</h3>
              <ul>
                <li>
                  <span>GATE Admit Card 2025</span>
                </li>
                <li>
                  <span>NEET Application Form 2025</span>
                </li>
                <li>
                  <span>CTET Admit Card 2025</span>
                </li>
                <li>
                  <span>CUET Application Form 2025</span>
                </li>
                <li>
                  <span>UGC NET Result 2024</span>
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
export default Footer;

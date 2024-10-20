import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { getImageURL } from "../../../utils/utils-image";

import handSpeaker from "/images/hand-speaker.png";
import leftArrow from "/images/left-arrow.png";
import rightArrow from "/images/right-arrow.png";
import clgSmallImg from "/images/img-dummy-sm.png";
import imglite from "/images/img-dummy-lite.png";
import mapIcon from "/images/map-icon.png";
import clgBanner from "/images/clg-bnr.png";
import downlaod from "/images/downloads.svg";
import compare from "/images/compare.svg";
import star from "/images/star.png";
import arrowTilt from "/images/arrow-tilt.svg";
import studentIcon from "/images/students-icon.svg";
import emailIcon from "/images/email-icon.svg";
import phoneIcon from "/images/phone-icon.svg";

function Home(props) {
  const [topnotification, setTopnotification] = useState({
    notif_id: "",
    notification_target: "",
    notification_title: "",
    notification_url: "",
  });
  const [toppopularcollegelisting, setToppopularcollegelisting] = useState({
    cid: "",
    college_name: "",
    college_url: "",
    logo: "",
    banner: "",
    state_name: "",
    city_name: "",
    totalplacementratio: "",
    exam_name: "",
    total_courses: "",
    lowestplacementrecord: "",
    higestplacementrecord: "",
    approved_by: "",
    college_types: "",
  });
  useEffect(() => {
    axios
      //.get("/api/cmsdetails/" + cms_url)
      .get("/api/topnotifications/")
      .then((response) => {
        setTopnotification(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      //.get("/api/cmsdetails/" + cms_url)
      .get("/api/toppopulercolleges/")
      .then((response) => {
        setToppopularcollegelisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);
  return (
    <>
      <section className="sliding-banner">
        <div className="serach-container">
          <div className="top-search">
            <span>Top Cources:</span>
            <span className="border-chips">BE/B.Tech</span>
            <span className="border-chips">MBA</span>
            <span className="border-chips">MBBS</span>
            <span className="border-chips">M.Tech</span>
            <span className="border-chips">BCA</span>
            <span className="border-chips">BBA</span>
          </div>
          <div className="search-wrapper mt-7">
            <form action="">
              <input
                type="text"
                value=""
                id="search-input"
                placeholder="Search: Collages, Courses, Exams, Specializations & More"
              />
              <input type="button" id="search-btn" value="Search" />
            </form>
          </div>
          <div className="recent-search mt-5">
            <span>Your Recent Search:</span>
            <span className="link">IIT Delhi, New Delhi</span>
            <span className="link">DTU, New Delhi</span>
            <span className="link">JEE Main</span>
          </div>
        </div>
      </section>
      <section className="latest-news">
        <div className="news-wrapper">
          <span>
            <img src={handSpeaker} alt="" />
          </span>
          <span>
            <img src={leftArrow} alt="" />
          </span>
          <div className="news-list">
            {topnotification.length > 0 &&
              topnotification.map((nitem) => (
                <span id={nitem.notif_id}>
                  <a
                    href={nitem.notification_url}
                    alt={nitem.notification_title}
                    target={
                      nitem.notification_target != "Pairent" ? "_blank" : ""
                    }
                  >
                    {nitem.notification_title}
                  </a>
                </span>
              ))}
          </div>
          <span>
            <img src={rightArrow} alt="" />
          </span>
        </div>
      </section>
      <section className="featured">
        <div className="featured-label">Featured</div>
        <div className="featured-card-container">
          <div className="featured-card">
            <div className="details">
              <div className="img-box">
                <img src={clgSmallImg} alt="" />
              </div>
              <div className="info">
                <p>
                  Swami Vivekananda Institute of Management and Computer Sc...
                </p>
                <div>
                  <span className="location">
                    <img src={mapIcon} alt="" />
                    <span>Kolkata</span>
                  </span>
                  <span className="view-more">View More</span>
                </div>
              </div>
            </div>
            <div className="other-info">Avg. Package 15L, India Rank 10th</div>
          </div>

          <div className="featured-card">
            <div className="details">
              <div className="img-box">
                <img src={clgSmallImg} alt="" />
              </div>
              <div className="info">
                <p>
                  Swami Vivekananda Institute of Management and Computer Sc...
                </p>
                <div>
                  <span className="location">
                    <img src={mapIcon} alt="" />
                    <span>Kolkata</span>
                  </span>
                  <span className="view-more">View More</span>
                </div>
              </div>
            </div>
            <div className="other-info">Avg. Package 15L, India Rank 10th</div>
          </div>

          <div className="featured-card">
            <div className="details">
              <div className="img-box">
                <img src={clgSmallImg} alt="" />
              </div>
              <div className="info">
                <p>
                  Swami Vivekananda Institute of Management and Computer Sc...
                </p>
                <div>
                  <span className="location">
                    <img src={mapIcon} alt="" />
                    <span>Kolkata</span>
                  </span>
                  <span className="view-more">View More</span>
                </div>
              </div>
            </div>
            <div className="other-info">Avg. Package 15L, India Rank 10th</div>
          </div>

          <div className="featured-card">
            <div className="details">
              <div className="img-box">
                <img src={clgSmallImg} alt="" />
              </div>
              <div className="info">
                <p>
                  Swami Vivekananda Institute of Management and Computer Sc...
                </p>
                <div>
                  <span className="location">
                    <img src={mapIcon} alt="" />
                    <span>Kolkata</span>
                  </span>
                  <span className="view-more">View More</span>
                </div>
              </div>
            </div>
            <div className="other-info">Avg. Package 15L, India Rank 10th</div>
          </div>
        </div>
      </section>
      <section className="container future-goals">
        <div className="head-line">Choose Your Future Goal</div>
        <div className="course-type-container">
          <div className="course-type">
            <div className="info">
              <h1>Engineering</h1>
              <span>6200 Collages</span>
            </div>
            <ul>
              <li>BE/B.Tech</li>
              <li>ME/M.Tech</li>
              <li>Polytechnic Courses</li>
            </ul>
            <div className="link">
              <a href="#">Find By Location</a>
              <a href="#">Top Collages</a>
            </div>
          </div>

          <div className="course-type">
            <div className="info">
              <h1>Engineering</h1>
              <span>6200 Collages</span>
            </div>
            <ul>
              <li>BE/B.Tech</li>
              <li>ME/M.Tech</li>
              <li>Polytechnic Courses</li>
            </ul>
            <div className="link">
              <a href="#">Find By Location</a>
              <a href="#">Top Collages</a>
            </div>
          </div>

          <div className="course-type">
            <div className="info">
              <h1>Engineering</h1>
              <span>6200 Collages</span>
            </div>
            <ul>
              <li>BE/B.Tech</li>
              <li>ME/M.Tech</li>
              <li>Polytechnic Courses</li>
            </ul>
            <div className="link">
              <a href="#">Find By Location</a>
              <a href="#">Top Collages</a>
            </div>
          </div>

          <div className="course-type">
            <div className="info">
              <h1>Engineering</h1>
              <span>6200 Collages</span>
            </div>
            <ul>
              <li>BE/B.Tech</li>
              <li>ME/M.Tech</li>
              <li>Polytechnic Courses</li>
            </ul>
            <div className="link">
              <a href="#">Find By Location</a>
              <a href="#">Top Collages</a>
            </div>
          </div>
        </div>
      </section>
      <section className="container popular-colleges">
        <div className="head-line">Most Popular Featured Collages</div>
        <div className="popular-clg-container">
          {toppopularcollegelisting.length > 0 &&
            toppopularcollegelisting.map((item, id) => (
              <div className="popular-clg">
                <div
                  className="header"
                  style={{
                    backgroundImage: `url(${getImageURL(item.banner) ? getImageURL(item.banner) : clgBanner})`,
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div>
                    <img src={getImageURL(item.logo)} alt="" />
                    <div className="details">
                      <h3>{item.college_name} </h3>
                      <p>
                        {item.city_name}, {item.state_name}
                      </p>
                      <p>{item.approved_by}</p>
                    </div>
                  </div>
                  <div className="heart"></div>
                </div>
                <div className="other-details">
                  <div className="clg-type-rating">
                    <span>BE/B.Tech</span>
                    <span className="clg-rating">
                      <img src={star} alt="" />
                      <span>4.5 (55)</span>
                    </span>
                  </div>
                  <ul className="links">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <div className="action-btns">
                    <div className="download">
                      <img src={downlaod} alt="" />
                      <span>Download Brochure</span>
                    </div>
                    <div className="compare">
                      <img src={compare} alt="" />
                      <span>Compare</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className="container exams">
        <div className="head-line">Exams</div>
        <div className="exams-container">
          <ul className="tabs">
            <li className="active">All</li>
            <li>Popular</li>
            <li>After 12th</li>
          </ul>
          <div className="exam-card-list">
            <div className="exam-card">
              <div className="exam-meta">
                <img src={clgSmallImg} alt="" />
                <div>
                  <h3>GATE</h3>
                  <span>online</span>
                </div>
              </div>
              <div className="exam-info-list">
                <div className="exam-info">
                  <span>Exam Level</span>
                  <span>National</span>
                </div>
                <div className="exam-info">
                  <span>Exam Date</span>
                  <span>12-May-2024</span>
                </div>
              </div>
              <hr className="hr-x" />
              <div className="exam-link">
                <span className="link">Registration Process</span>
                <span className="link">Exam Information</span>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-meta">
                <img src={clgSmallImg} alt="" />
                <div>
                  <h3>GATE</h3>
                  <span>online</span>
                </div>
              </div>
              <div className="exam-info-list">
                <div className="exam-info">
                  <span>Exam Level</span>
                  <span>National</span>
                </div>
                <div className="exam-info">
                  <span>Exam Date</span>
                  <span>12-May-2024</span>
                </div>
              </div>
              <hr className="hr-x" />
              <div className="exam-link">
                <span className="link">Registration Process</span>
                <span className="link">Exam Information</span>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-meta">
                <img src={clgSmallImg} alt="" />
                <div>
                  <h3>GATE</h3>
                  <span>online</span>
                </div>
              </div>
              <div className="exam-info-list">
                <div className="exam-info">
                  <span>Exam Level</span>
                  <span>National</span>
                </div>
                <div className="exam-info">
                  <span>Exam Date</span>
                  <span>12-May-2024</span>
                </div>
              </div>
              <hr className="hr-x" />
              <div className="exam-link">
                <span className="link">Registration Process</span>
                <span className="link">Exam Information</span>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-meta">
                <img src={clgSmallImg} alt="" />
                <div>
                  <h3>GATE</h3>
                  <span>online</span>
                </div>
              </div>
              <div className="exam-info-list">
                <div className="exam-info">
                  <span>Exam Level</span>
                  <span>National</span>
                </div>
                <div className="exam-info">
                  <span>Exam Date</span>
                  <span>12-May-2024</span>
                </div>
              </div>
              <hr className="hr-x" />
              <div className="exam-link">
                <span className="link">Registration Process</span>
                <span className="link">Exam Information</span>
              </div>
            </div>

            <div className="exam-card">
              <div className="exam-meta">
                <img src={clgSmallImg} alt="" />
                <div>
                  <h3>GATE</h3>
                  <span>online</span>
                </div>
              </div>
              <div className="exam-info-list">
                <div className="exam-info">
                  <span>Exam Level</span>
                  <span>National</span>
                </div>
                <div className="exam-info">
                  <span>Exam Date</span>
                  <span>12-May-2024</span>
                </div>
              </div>
              <hr className="hr-x" />
              <div className="exam-link">
                <span className="link">Registration Process</span>
                <span className="link">Exam Information</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container news-updates">
        <div className="head-line">Latest News & Updates </div>
        <div className="news-updates-container">
          <ul className="tabs">
            <li className="active">Admission</li>
            <li>Exam</li>
            <li>College</li>
          </ul>
          <div className="news-card-list">
            <div className="news-card">
              <div className="heading">
                <h3>CUET PG 2023 Pottery and Ceramics Question Paper...</h3>
              </div>
              <div className="date">20-Jan-2024</div>
              <p className="details">
                CUET PG 2023 Pottery and Ceramics Question Paper with Answer Key
                PDF in Hindi is available for download here. The exam was
                conducted by National Te...
              </p>
              <hr className="hr-x" />
              <span className="link">Continue Reading...</span>
            </div>

            <div className="news-card">
              <div className="heading">
                <h3>CUET PG 2023 Pottery and Ceramics Question Paper...</h3>
              </div>
              <div className="date">20-Jan-2024</div>
              <p className="details">
                CUET PG 2023 Pottery and Ceramics Question Paper with Answer Key
                PDF in Hindi is available for download here. The exam was
                conducted by National Te...
              </p>
              <hr className="hr-x" />
              <span className="link">Continue Reading...</span>
            </div>

            <div className="news-card">
              <div className="heading">
                <h3>CUET PG 2023 Pottery and Ceramics Question Paper...</h3>
              </div>
              <div className="date">20-Jan-2024</div>
              <p className="details">
                CUET PG 2023 Pottery and Ceramics Question Paper with Answer Key
                PDF in Hindi is available for download here. The exam was
                conducted by National Te...
              </p>
              <hr className="hr-x" />
              <span className="link">Continue Reading...</span>
            </div>

            <div className="news-card">
              <div className="heading">
                <h3>CUET PG 2023 Pottery and Ceramics Question Paper...</h3>
              </div>
              <div className="date">20-Jan-2024</div>
              <p className="details">
                CUET PG 2023 Pottery and Ceramics Question Paper with Answer Key
                PDF in Hindi is available for download here. The exam was
                conducted by National Te...
              </p>
              <hr className="hr-x" />
              <span className="link">Continue Reading...</span>
            </div>

            <div className="news-card">
              <div className="heading">
                <h3>CUET PG 2023 Pottery and Ceramics Question Paper...</h3>
              </div>
              <div className="date">20-Jan-2024</div>
              <p className="details">
                CUET PG 2023 Pottery and Ceramics Question Paper with Answer Key
                PDF in Hindi is available for download here. The exam was
                conducted by National Te...
              </p>
              <hr className="hr-x" />
              <span className="link">Continue Reading...</span>
            </div>
          </div>
        </div>
      </section>
      <section className="by-cities">
        <div className="container">
          <div className="head-line">Study by Cities</div>
          <div className="by-cities-list">
            <div className="city-card">
              <div>
                <img src={imglite} alt="" />
                <p>Delhi NCR</p>
              </div>
            </div>

            <div className="city-card">
              <div>
                <img src={imglite} alt="" />
                <p>Delhi NCR</p>
              </div>
            </div>

            <div className="city-card">
              <div>
                <img src={imglite} alt="" />
                <p>Delhi NCR</p>
              </div>
            </div>

            <div className="city-card">
              <div>
                <img src={imglite} alt="" />
                <p>Delhi NCR</p>
              </div>
            </div>

            <div className="city-card">
              <div>
                <img src={imglite} alt="" />
                <p>Delhi NCR</p>
              </div>
            </div>

            <div className="city-card">
              <div>
                <img src={imglite} alt="" />
                <p>Delhi NCR</p>
              </div>
            </div>
            <div className="city-card">
              <div>
                <img src={imglite} alt="" />
                <p>Delhi NCR</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container admissions">
        <div className="head-line">Admission 2024</div>
        <div className="admission-links-list">
          <div className="chips-link">
            <span>JEE Mains Admission 2024</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>CUET Admission 2024</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>MBA Admission 2024</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>LLB Admission 2024</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>B.Sc Admission 2024</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>MBBS Admission 2024</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>PhD Admission 2024</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>B Ed Admission 2024</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
        </div>
      </section>
      <section className="container trending">
        <div className="head-line">Trending</div>
        <div className="admission-links-list">
          <div className="chips-link">
            <span>JEE Mains</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>CUET</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>MBBS</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>AKTU Results 2023</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>IMT Ghaziabad</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>Amity University Noida</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>IIMT Engg. Collage Meerut</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>BITS Pilani</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>B.Tech</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
          <div className="chips-link">
            <span>GATE</span>
            <span>
              <img src={arrowTilt} alt="" />
            </span>
          </div>
        </div>
      </section>
      <section className="container get-notify">
        <div className="head-line"> Get Notify About Your Choices</div>
        <form action="">
          <div className="get-notify-container">
            <div className="form-element">
              <span>
                <img src={studentIcon} alt="" />
              </span>
              <select name="course-list" id="">
                <option value="-Select-">Choose courses</option>
                <option value="option">Option</option>
              </select>
            </div>
            <div className="form-element">
              <span>
                <img src={emailIcon} alt="" />
              </span>
              <input type="text" name="" id="" placeholder="Enter your email" />
            </div>
            <div className="form-element">
              <span>
                <img src={phoneIcon} alt="" />
              </span>
              <input type="text" name="" id="" placeholder="Enter your phone" />
            </div>
            <button type="button">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

Home.propTypes = {};

export default Home;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
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

import Slider from "react-slick";
import Featured from "./featured";
import FutureGoals from "./futureGoals";
import Exams from "./exams";
import NewsAndUpdates from "./newsAndUpdates";
import Citywise from "./citywise";

function Home(props) {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

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
  
  const [bycity, setBycity] = useState({
    cit_id: "",
    city_name: "",
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

    axios
      .get("/api/studybycities/")
      .then((response) => {
        setBycity(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);

  const renderFeaturedSlider = () => (
    <Slider {...settings}>
      <div>
        <Featured clgSmallImg={clgSmallImg} mapIcon={mapIcon} />
      </div>

      <div>
        <Featured clgSmallImg={clgSmallImg} mapIcon={mapIcon} />
      </div>

      <div>
        <Featured clgSmallImg={clgSmallImg} mapIcon={mapIcon} />
      </div>

      <div>
        <Featured clgSmallImg={clgSmallImg} mapIcon={mapIcon} />
      </div>

      <div>
        <Featured clgSmallImg={clgSmallImg} mapIcon={mapIcon} />
      </div>

      <div>
        <Featured clgSmallImg={clgSmallImg} mapIcon={mapIcon} />
      </div>

      <div>
        <Featured clgSmallImg={clgSmallImg} mapIcon={mapIcon} />
      </div>
    </Slider>
  );

  const renderFutureGolesType = () => (
    <Slider {...settings}>
      <div>
        <FutureGoals />
      </div>
      <div>
        <FutureGoals />
      </div>
      <div>
        <FutureGoals />
      </div>
      <div>
        <FutureGoals />
      </div>
      <div>
        <FutureGoals />
      </div>
      <div>
        <FutureGoals />
      </div>
    </Slider>
  );

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
        <div className="featured-card-container">{renderFeaturedSlider()}</div>
      </section>

      <section className="container future-goals">
        <div className="head-line">Choose Your Future Goal</div>
        <div className="course-type-container">{renderFutureGolesType()}</div>
      </section>

      <section className="container popular-colleges">
        <div className="head-line">Most Popular Featured Collages</div>
        <div className="popular-clg-container">
          {toppopularcollegelisting.length > 0 &&
            toppopularcollegelisting.map((item, id) => {
              if (id < 8) {
                return (
                  <>
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
                  </>
                );
              }
            })}
        </div>
      </section>

      <Exams clgSmallImg={clgSmallImg} />

      <NewsAndUpdates />

      <Citywise imglite={imglite} />

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

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
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

import { openModel } from "../../../redux/manageModelSlice";

import GlobalSearch from "../commonComps/globalSearch";

function Home(props) {
  const dispatch = useDispatch();

  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const [topcourses, setTopcourses] = useState({
    notif_id: "",
    notification_target: "",
    notification_title: "",
    notification_url: "",
  });
  const [topnotification, setTopnotification] = useState({
    cour_id: "",
    course_name: "",
    course_url: "",
  });
  // const [suggestcolleges, setSuggestcolleges] = useState();
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
  const [tradingarr, setTradingarr] = useState({
    trading_url: "",
    trading_name: "",
  });

  // const [searchparameter, setSearchparameter] = useState({
  //   search_parameter: "",
  // });

  useEffect(() => {
    axios
      //.get("/api/cmsdetails/" + cms_url)
      .get("/api/topCourses/")
      .then((response) => {
        setTopcourses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
    axios
      .get("/api/tradings")
      .then((response) => {
        setTradingarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);

  const renderFeaturedSlider = () => (
    <Featured clgSmallImg={clgSmallImg} mapIcon={mapIcon} />
  );

  const renderFutureGolesType = () => <FutureGoals />;

  // const handleChangeFormdata = (e) => {
  //   const { name, value } = e.target;
  //   setSearchparameter((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // console.log("search -->", searchparameter);
  // const searchCollege = () => {
  //   //alert(searchparameter.search_parameter);
  //   window.location = "search?keyword=" + searchparameter.search_parameter;
  // };

  // const autosuggestcolleges = (e) => {
  //   const college_name = e.target.value;
  //   //console.log("s", collegeName);
  //   if (college_name != "") {
  //     axios
  //       //.get("/api/cmsdetails/" + cms_url)
  //       .get("/api/autosuggestcolleges/" + college_name)
  //       .then((response) => {
  //         setSuggestcolleges(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } else {
  //     setSuggestcolleges();
  //   }
  // };

  // const searchvalueset = (e, val) => {
  //   setSearchparameter({ search_parameter: val });
  //   setSuggestcolleges();
  // };

  return (
    <>
      <Helmet>
        <title>
          Check Abroad Colleges Scholarships, College Search, Lists, Admission,
          Rankings & Awards and Students Review!
        </title>
        <meta
          name="description"
          content="Times of College: Making the Abroad college search easier with our state-of-the-art search tools, college rankings and lists, and awesome expert advice. Get Detailed Information on Top Colleges, Courses & Exams across globe. Get alerts about Ranking, Cutoff, Placements, Fees & Admissions."
        />
        <meta
          name="keywords"
          content="timesofcollege, higher education, colleges, universities, institutes, career, career options, career prospects, engineering, mba & pgdm, medical, mbbs,study abroad, foreign education, college, university, institute,courses, coaching, technical education, higher education,forum, community, education career experts,ask experts, admissions,results, events,scholarships"
        />
        <link
          id="canonicalUrl"
          rel="canonical"
          href={`https://timesofcollege.com`}
        />
        <meta property="og:site_name" content="Times of College"></meta>
        <meta property="og:url" content={`https://timesofcollege.com`} />
        <meta property="og:type" content="college-view" />
        <meta
          property="og:title"
          key="og:title"
          content="Check Abroad Colleges Scholarships, College Search, Lists, Admission,
          Rankings & Awards and Students Review!"
        />
        =
        <meta
          property="og:description"
          key="og:description"
          content="Times of College: Making the Abroad college search easier with our state-of-the-art search tools, college rankings and lists, and awesome expert advice. Get Detailed Information on Top Colleges, Courses & Exams across globe. Get alerts about Ranking, Cutoff, Placements, Fees & Admissions."
        />
        <meta
          property="og:image"
          key="og:image"
          content={`https://timesofcollege.com/images/logoWhite.png`}
        />
      </Helmet>
      <section className="sliding-banner">
        <div className="search-container">
          <div className="top-search">
            <span style={{ color: "#fff" }}>Top Courses:</span>
            {topcourses.length > 0 &&
              topcourses.map((citem) => (
                <span className="border-chips" id={citem.cour_id}>
                  <a href={"course/" + citem.course_url}>{citem.course_name}</a>
                </span>
              ))}
          </div>
          {/* <div className="search-wrapper mt-7">
            <form action="" name="searchForm" id="searchForm" method="post">
              <input
                type="text"
                value={searchparameter.search_parameter}
                id="search-input"
                name="search_parameter"
                placeholder="Search: Collages, Courses, Exams, Specializations & More"
                onChange={handleChangeFormdata}
                onKeyUp={(e) => autosuggestcolleges(e)}
                autocomplete="off"
              />
              <input
                type="button"
                id="search-btn"
                value="Search"
                onClick={searchCollege}
              />

              {suggestcolleges?.length > 0 && (
                <div className="collegeAutosuggest-section">
                  <ul>
                    {suggestcolleges.map((item, id) => (
                      <li
                        key={id}
                        onClick={(e) => searchvalueset(e, item.college_name)}
                      >
                        {item.college_name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </form>
          </div> */}
          <div onClick={() => dispatch(openModel())}>
            <GlobalSearch />
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
        <div className="head-line">Most Popular Featured College's</div>
        <div className="popular-clg-container">
          {toppopularcollegelisting.length > 0 &&
            toppopularcollegelisting.map((item, id) => {
              if (id < 8) {
                return (
                  <>
                    <a href={"college/" + item.college_url}>
                      <div className="popular-clg" key={id}>
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
                          <ul className="links mt-2 mb-2">
                            <li className="text-sm">
                              <span>College Type: </span>
                              <span>
                                <b>{item.college_types}</b>
                              </span>
                            </li>
                            <li className="text-sm">
                              <span>Placement Ratio: </span>
                              <span>
                                <b>{item.totalplacementratio}</b>
                              </span>
                            </li>
                            <li className="text-sm">
                              <span>Highest Package: </span>
                              <span>
                                <b>{item.higestplacementrecord}</b>
                              </span>
                            </li>
                            <li className="text-sm">
                              <span>Exam Accepted: </span>
                              <span>
                                <b>{item.exam_name}</b>
                              </span>
                            </li>
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
                    </a>
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
        <div className="head-line">Admission 2025</div>
        <div className="admission-links-list">
          <a href={"/listing"}>
            <div className="chips-link">
              <span>JEE Mains Admission 2025</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
          </a>
          <a href={"/listing"}>
            <div className="chips-link">
              <span>CUET Admission 2025</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
          </a>
          <a href={"/listing"}>
            <div className="chips-link">
              <span>MBA Admission 2025</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
          </a>
          <a href={"/listing"}>
            <div className="chips-link">
              <span>LLB Admission 2025</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
          </a>
          <a href={"/listing"}>
            <div className="chips-link">
              <span>B.Sc Admission 2025</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
          </a>
          <a href={"/listing"}>
            <div className="chips-link">
              <span>MBBS Admission 2025</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
          </a>
          <a href={"/listing"}>
            <div className="chips-link">
              <span>PhD Admission 2025</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
          </a>
          <a href={"/listing"}>
            <div className="chips-link">
              <span>B Ed Admission 2025</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
          </a>
        </div>
      </section>
      <section className="container trending">
        <div className="head-line">Trending</div>
        <div className="admission-links-list">
          {tradingarr.length > 0 &&
            tradingarr.map((trd, keyid) => (
              <a href={"/listing"}>
                <div className="chips-link" key={keyid}>
                  <span>{trd.trading_name}</span>
                  <span>
                    <img src={arrowTilt} alt="" />
                  </span>
                </div>
              </a>
            ))}
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

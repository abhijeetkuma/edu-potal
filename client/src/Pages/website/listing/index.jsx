import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { getImageURL } from "../../../utils/utils-image";

import arrowUpIcon from "/images/arrowUp.svg";
import clgSmallImg from "/images/img-dummy-sm.png";
import mapIcon from "/images/map-icon.png";
import star from "/images/star.png";
import downlaod from "/images/downloads.svg";
import compare from "/images/compare.svg";
import searchIcon from "/images/search.svg";
import arrowTilt from "/images/arrow-tilt.svg";
import studentIcon from "/images/students-icon.svg";
import emailIcon from "/images/email-icon.svg";
import phoneIcon from "/images/phone-icon.svg";
import adsImg from "/images/ads.svg";
import NewsAndUpdates from "./../home/newsAndUpdates";
import Filter from "../listing/filter";

function Listing(props) {
  const [collegelisting, setCollegelisting] = useState({
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
  const [filterct, setFilterct] = useState({
    col_type: "",
    college_type: "",
    total_count: "",
  });
  const [filtercourse, setFiltercourse] = useState({
    col_type: "",
    college_type: "",
    total_count: "",
  });
  const [filterstate, setFilterstate] = useState({
    sta_id: "",
    state_name: "",
  });
  const [filtercity, setFiltercity] = useState({
    cit_id: "",
    city_name: "",
  });
  useEffect(() => {
    axios
      //.get("/api/cmsdetails/" + cms_url)
      .get("/api/collegelisting/", {
        params: {
          city_url: props.city_url,
          category_url: props.category_url,
          course_url: props.course_url,
          search_parameter: props.search_parameter,
        },
      })
      .then((response) => {
        setCollegelisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
    axios
      //.get("/api/cmsdetails/" + cms_url)
      .get("/api/filtercollegetypes/")
      .then((response) => {
        setFilterct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      //.get("/api/cmsdetails/" + cms_url)
      .get("/api/filtercourses/")
      .then((response) => {
        setFiltercourse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/api/filterstate/")
      .then((response) => {
        setFilterstate(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/api/filtercity/")
      .then((response) => {
        setFiltercity(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  //console.log("collegelisting", collegelisting.length);
  //console.log("props", props.city_url);
  return (
    <>
      <section className="header"></section>
      <section className="container college-filter-wrapper">
        <section className="filter-section mt-5">
          <Filter header="Ownership Type" fdata={filterct} search={false} />
          <Filter header="Course" filtercourse={filtercourse} search={true} />
          <Filter header="State" filterstate={filterstate} search={true} />
          <Filter header="City" filtercity={filtercity} search={true} />

          <div className="filter-card study-type">
            <div className="header">
              <span>Study Type</span>
              <span>
                <img src={arrowUpIcon} alt="" />
              </span>
            </div>
            <ul>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Distance / Correspondence</label>
                </span>
                <span>(22)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Online</label>
                </span>
                <span>(110)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Part Time</label>
                </span>
                <span>(30)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Regular</label>
                </span>
                <span>(1100)</span>
              </li>
            </ul>
          </div>

          <div className="filter-card specialization">
            <div className="header">
              <span>Specialization</span>
              <span>
                <img src={arrowUpIcon} alt="" />
              </span>
            </div>
            <div className="serach">
              <input type="text" placeholder="Search" />
              <img src={searchIcon} alt="" />
            </div>
            <ul>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Computer Science Engineering</label>
                </span>
                <span>(200)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Civil Engineering</label>
                </span>
                <span>(100)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Electrical Engineering</label>
                </span>
                <span>(350)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Electronics Engineering</label>
                </span>
                <span>(310)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Information Technology</label>
                </span>
                <span>(140)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Robotics Engineering</label>
                </span>
                <span>(120)</span>
              </li>
            </ul>
          </div>

          <div className="filter-card exams-type">
            <div className="header">
              <span>Accepted Exams</span>
              <span>
                <img src={arrowUpIcon} alt="" />
              </span>
            </div>
            <ul>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">CBSE 12th</label>
                </span>
                <span>(42)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">CUET</label>
                </span>
                <span>(2110)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">JEE Main</label>
                </span>
                <span>(300)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">NEET</label>
                </span>
                <span>(500)</span>
              </li>
            </ul>
          </div>

          <div className="filter-card total-fees">
            <div className="header">
              <span>Total Fees</span>
              <span>
                <img src={arrowUpIcon} alt="" />
              </span>
            </div>
            <ul>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">{"< 1 Lakh"}</label>
                </span>
                <span>(1200)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">{"1 - 2 Lakh"}</label>
                </span>
                <span>(810)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">{"2 - 3 Lakh"}</label>
                </span>
                <span>(800)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">{"3 - 4 Lakh"}</label>
                </span>
                <span>(600)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">{"4 - 5 Lakh"}</label>
                </span>
                <span>(400)</span>
              </li>
              <li>
                <span>
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">{"> 5 Lakh"}</label>
                </span>
                <span>(350)</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="college-list-wrapper">
          <div className="applied-filters"></div>
          {collegelisting.length > 0 ? (
            collegelisting.map((item, id) => (
              <a href={"./../college/" + item.college_url}>
                <div className="college-list-card" id={item.cid} key={item.cid}>
                  <div className="title-section">
                    <div className="img-box">
                      <img
                        src={getImageURL(item.logo)}
                        alt={item.college_name}
                      />
                    </div>

                    <div className="heart"></div>
                    <div className="title-details">
                      <h2>{item.college_name}</h2>
                      <div>
                        <span className="location">
                          <img src={mapIcon} alt="" />
                          <span>
                            {item.city_name}, {item.state_name}
                          </span>
                        </span>
                        <span className="tieup">{item.approved_by}</span>
                        <span className="owner medium">
                          {item.college_types}
                        </span>
                        <span className="rank bold green"># NIRF</span>
                        <span className="rating">
                          <img src={star} alt="" />
                          <span><b>{7}</b>/10</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="other-details">
                    <div className="highlights">
                      <div>
                        <span>Accepted Exams</span>
                        <span>{item.exam_name ? item.exam_name : "NA"}</span>
                      </div>
                      <div>
                        <span>Courses Offered</span>
                        <span>
                          {item.total_courses ? item.total_courses : 0} Courses
                        </span>
                      </div>
                      <div>
                        <span>Total Fees Range</span>
                        <span> 10 L - 12 L</span>
                      </div>
                      <div>
                        <span>Package Range</span>
                        <span>
                          {" "}
                          {item.lowestplacementrecord} -
                          {item.higestplacementrecord}
                        </span>
                      </div>
                      <div>
                        <span>Placement %</span>
                        <span className="green">
                          {item.totalplacementratio
                            ? item.totalplacementratio
                            : "NA"}
                        </span>
                      </div>
                    </div>
                    <div className="action-btns">
                      <div>
                        <div className="download">
                          <img src={downlaod} alt="" />
                          <span>Download Brochure</span>
                        </div>
                        <div className="compare">
                          <img src={compare} alt="" />
                          <span>Compare</span>
                        </div>
                      </div>
                      <div className="apply-btn">
                        <button>Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="college-list-card">
              <p className="p-5 text-center text-xl">No College Found...</p>
            </div>
          )}
        </section>
        <div className="others">
          <div className="ads">
            <img src={adsImg} alt="" />
          </div>
          <div className="ads">
            <img src={adsImg} alt="" />
          </div>
        </div>
      </section>
      <NewsAndUpdates />

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

Listing.propTypes = {};

export default Listing;

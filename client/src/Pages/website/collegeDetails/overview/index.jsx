import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Relatedcolleges from "../../college/relatedcolleges";
import adsImg from "/images/ads.svg";
import mapIcon from "/images/map-icon.png";

import sports from "../../../../../public/images/facility/sports.png";
import auditorium from "../../../../../public/images/facility/auditorium.png";
import bank from "../../../../../public/images/facility/bank.png";
import cafeteria from "../../../../../public/images/facility/cafeteria.png";
import classrooms from "../../../../../public/images/facility/classrooms.png";
import complab from "../../../../../public/images/facility/complab.png";
import gym from "../../../../../public/images/facility/gym.png";
import hostel from "../../../../../public/images/facility/hostel.png";
import laboratory from "../../../../../public/images/facility/laboratory.png";
import library from "../../../../../public/images/facility/library.png";
import medical from "../../../../../public/images/facility/medical.png";
import transport from "../../../../../public/images/facility/transport.png";
import wifi from "../../../../../public/images/facility/wifi.png";

function CollegeOverview(props) {
  const {
    college_name,
    college_descripton,
    courses_name,
    courses,
    facultyprofile,
    placement_overview,
    totalplacementratio,
    averageplacementrecord,
    higestplacementrecord,
    lowestplacementrecord,
    toprecruiters,
    toprecuitingsectors,
    topprofile,
    facility_available,
    address,
    address2,
    city_name,
    state_name,
    pincode,
    email,
    contactno,
    website,
    meta_title,
    meta_description,
    meta_keyword,
    display_type,
    highlights,
  } = props.data;

  // const {courses} = props;

  return (
    <>
      <Helmet>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keyword} />
      </Helmet>
      <div className="overview-details">
        {/* <section className="latestNews">
          <h2 className="font-bold text-2xl">Noticeboard</h2>
          <ul className="mt-2">
            <li>
              <b>23-Dec-2024</b>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
            </li>
            <li>
              <b>03-Jan-2025</b>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
            </li>
          </ul>
        </section> */}

        <section className="about mt-10">
          <h2 className="font-bold text-2xl">About</h2>
          <p
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: college_descripton }}
          ></p>
        </section>

        <section className="tableOfContent mt-10">
          <h2 className="font-bold text-2xl">Table of Content</h2>
          <ul className="mt-2">
            <li>
              <Link rel="stylesheet" href="">
                Courses and Fees
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" href="">
                Admissions
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" href="">
                Placememts
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" href="">
                Scholarships
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" href="">
                Faculties
              </Link>
            </li>
          </ul>
        </section>

        <section className="highlights mt-10">
          <h2 className="font-bold text-2xl mb-5">Highlights</h2>
          <ul
            className={
              display_type === "Tabuller" ? "tabullerDisplay" : "bulletDisplay"
            }
          >
            {highlights?.map((item, i) => (
              <li>
                <span>{item.highParameter}</span>
                <span>{item.highDetails}</span>
              </li>
            ))}
          </ul>

          {/* <table className="table-bordered no-header left-BG">
            <tbody className="table-bordered-body">
              {
                <tr>
                  <td>
                      <span>Famous Name</span>
                  </td>
                  <td>
                      <b>GLBITM</b>
                  </td>
                </tr>
              }
                <tr>
                    <td>
                        <span>Famous Name</span>
                    </td>
                    <td>
                        <b>GLBITM</b>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Established Year</span>
                    </td>
                    <td>
                        <b>1997</b>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>College Type</span>
                    </td>
                    <td>
                        <b>Private</b>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Campus Location</span>
                    </td>
                    <td>
                        <b>Greater Noida</b>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Campus Size</span>
                    </td>
                    <td>
                        <b>30 Acres</b>
                    </td>
                </tr>
            </tbody>
          </table> */}
        </section>

        <section className="courses college-list-wrapper mt-10">
          <h2 className="font-bold text-2xl mb-5">Top Programs</h2>
          <div className="college-list-card" id="34">
            <div className="title-section">
              {/* <div className="img-box">
                <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                </div> */}
              <div className="heart"></div>
              <div className="title-details">
                <h2>B.E. / B.Tech</h2>
                <div>
                  {/* <span className="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span className="tieup">AICTE, AIU, UGC</span> */}
                  <span className="owner medium">25 Courses</span>
                  <span className="rank bold green"># NIRF</span>
                  <span className="rating">
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="other-details">
              <div className="highlights">
                <div>
                  <span>Accepted Exams</span>
                  <span>ATMA, CAT, CMAT, GMAT, MAT, XAT</span>
                </div>
                <div>
                  <span>Courses Offered</span>
                  <span>0 Courses</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span> 10 L - 12 L</span>
                </div>
                <div>
                  <span>Package Range</span>
                  <span> -</span>
                </div>
                <div>
                  <span>Placement %</span>
                  <span className="green">NA</span>
                </div>
              </div>
              <div className="action-btns">
                <div>
                  <div className="download">
                    <img src="/images/downloads.svg" alt="" />
                    <span>Download Brochure</span>
                  </div>
                  <div className="compare">
                    <img src="/images/compare.svg" alt="" />
                    <span>Compare</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <button onClick={props.openModal}>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college-list-card" id="34">
            <div className="title-section">
              {/* <div className="img-box">
                <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                </div> */}
              <div className="heart"></div>
              <div className="title-details">
                <h2>B.Sc</h2>
                <div>
                  {/* <span className="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span className="tieup">AICTE, AIU, UGC</span> */}
                  <span className="owner medium">25 Courses</span>
                  <span className="rank bold green"># NIRF</span>
                  <span className="rating">
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="other-details">
              <div className="highlights">
                <div>
                  <span>Accepted Exams</span>
                  <span>ATMA, CAT, CMAT, GMAT, MAT, XAT</span>
                </div>
                <div>
                  <span>Courses Offered</span>
                  <span>0 Courses</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span> 10 L - 12 L</span>
                </div>
                <div>
                  <span>Package Range</span>
                  <span> -</span>
                </div>
                <div>
                  <span>Placement %</span>
                  <span className="green">NA</span>
                </div>
              </div>
              <div className="action-btns">
                <div>
                  <div className="download">
                    <img src="/images/downloads.svg" alt="" />
                    <span>Download Brochure</span>
                  </div>
                  <div className="compare">
                    <img src="/images/compare.svg" alt="" />
                    <span>Compare</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <button onClick={props.openModal}>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college-list-card" id="34">
            <div className="title-section">
              {/* <div className="img-box">
                <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                </div> */}
              <div className="heart"></div>
              <div className="title-details">
                <h2>M.Sc</h2>
                <div>
                  {/* <span className="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span className="tieup">AICTE, AIU, UGC</span> */}
                  <span className="owner medium">25 Courses</span>
                  <span className="rank bold green"># NIRF</span>
                  <span className="rating">
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="other-details">
              <div className="highlights">
                <div>
                  <span>Accepted Exams</span>
                  <span>ATMA, CAT, CMAT, GMAT, MAT, XAT</span>
                </div>
                <div>
                  <span>Courses Offered</span>
                  <span>0 Courses</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span> 10 L - 12 L</span>
                </div>
                <div>
                  <span>Package Range</span>
                  <span> -</span>
                </div>
                <div>
                  <span>Placement %</span>
                  <span className="green">NA</span>
                </div>
              </div>
              <div className="action-btns">
                <div>
                  <div className="download">
                    <img src="/images/downloads.svg" alt="" />
                    <span>Download Brochure</span>
                  </div>
                  <div className="compare">
                    <img src="/images/compare.svg" alt="" />
                    <span>Compare</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <button onClick={props.openModal}>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college-list-card" id="34">
            <div className="title-section">
              {/* <div className="img-box">
                <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                </div> */}
              <div className="heart"></div>
              <div className="title-details">
                <h2>B.E. / B.Tech</h2>
                <div>
                  {/* <span className="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span className="tieup">AICTE, AIU, UGC</span> */}
                  <span className="owner medium">25 Courses</span>
                  <span className="rank bold green"># NIRF</span>
                  <span className="rating">
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="other-details">
              <div className="highlights">
                <div>
                  <span>Accepted Exams</span>
                  <span>ATMA, CAT, CMAT, GMAT, MAT, XAT</span>
                </div>
                <div>
                  <span>Courses Offered</span>
                  <span>0 Courses</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span> 10 L - 12 L</span>
                </div>
                <div>
                  <span>Package Range</span>
                  <span> -</span>
                </div>
                <div>
                  <span>Placement %</span>
                  <span className="green">NA</span>
                </div>
              </div>
              <div className="action-btns">
                <div>
                  <div className="download">
                    <img src="/images/downloads.svg" alt="" />
                    <span>Download Brochure</span>
                  </div>
                  <div className="compare">
                    <img src="/images/compare.svg" alt="" />
                    <span>Compare</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <button onClick={props.openModal}>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college-list-card" id="34">
            <div className="title-section">
              {/* <div className="img-box">
                <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                </div> */}
              <div className="heart"></div>
              <div className="title-details">
                <h2>B.E. / B.Tech</h2>
                <div>
                  {/* <span className="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span className="tieup">AICTE, AIU, UGC</span> */}
                  <span className="owner medium">25 Courses</span>
                  <span className="rank bold green"># NIRF</span>
                  <span className="rating">
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="other-details">
              <div className="highlights">
                <div>
                  <span>Accepted Exams</span>
                  <span>ATMA, CAT, CMAT, GMAT, MAT, XAT</span>
                </div>
                <div>
                  <span>Courses Offered</span>
                  <span>0 Courses</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span> 10 L - 12 L</span>
                </div>
                <div>
                  <span>Package Range</span>
                  <span> -</span>
                </div>
                <div>
                  <span>Placement %</span>
                  <span className="green">NA</span>
                </div>
              </div>
              <div className="action-btns">
                <div>
                  <div className="download">
                    <img src="/images/downloads.svg" alt="" />
                    <span>Download Brochure</span>
                  </div>
                  <div className="compare">
                    <img src="/images/compare.svg" alt="" />
                    <span>Compare</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <button onClick={props.openModal}>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college-list-card" id="34">
            <div className="title-section">
              {/* <div className="img-box">
                <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                </div> */}
              <div className="heart"></div>
              <div className="title-details">
                <h2>B.E. / B.Tech</h2>
                <div>
                  {/* <span className="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span className="tieup">AICTE, AIU, UGC</span> */}
                  <span className="owner medium">25 Courses</span>
                  <span className="rank bold green"># NIRF</span>
                  <span className="rating">
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="other-details">
              <div className="highlights">
                <div>
                  <span>Accepted Exams</span>
                  <span>ATMA, CAT, CMAT, GMAT, MAT, XAT</span>
                </div>
                <div>
                  <span>Courses Offered</span>
                  <span>0 Courses</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span> 10 L - 12 L</span>
                </div>
                <div>
                  <span>Package Range</span>
                  <span> -</span>
                </div>
                <div>
                  <span>Placement %</span>
                  <span className="green">NA</span>
                </div>
              </div>
              <div className="action-btns">
                <div>
                  <div className="download">
                    <img src="/images/downloads.svg" alt="" />
                    <span>Download Brochure</span>
                  </div>
                  <div className="compare">
                    <img src="/images/compare.svg" alt="" />
                    <span>Compare</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <button onClick={props.openModal}>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college-list-card" id="34">
            <div className="title-section">
              {/* <div className="img-box">
                <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                </div> */}
              <div className="heart"></div>
              <div className="title-details">
                <h2>B.E. / B.Tech</h2>
                <div>
                  {/* <span className="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span className="tieup">AICTE, AIU, UGC</span> */}
                  <span className="owner medium">25 Courses</span>
                  <span className="rank bold green"># NIRF</span>
                  <span className="rating">
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="other-details">
              <div className="highlights">
                <div>
                  <span>Accepted Exams</span>
                  <span>ATMA, CAT, CMAT, GMAT, MAT, XAT</span>
                </div>
                <div>
                  <span>Courses Offered</span>
                  <span>0 Courses</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span> 10 L - 12 L</span>
                </div>
                <div>
                  <span>Package Range</span>
                  <span> -</span>
                </div>
                <div>
                  <span>Placement %</span>
                  <span className="green">NA</span>
                </div>
              </div>
              <div className="action-btns">
                <div>
                  <div className="download">
                    <img src="/images/downloads.svg" alt="" />
                    <span>Download Brochure</span>
                  </div>
                  <div className="compare">
                    <img src="/images/compare.svg" alt="" />
                    <span>Compare</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <button onClick={props.openModal}>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="college-list-card" id="34">
            <div className="title-section">
              {/* <div className="img-box">
                <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                </div> */}
              <div className="heart"></div>
              <div className="title-details">
                <h2>B.E. / B.Tech</h2>
                <div>
                  {/* <span className="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span className="tieup">AICTE, AIU, UGC</span> */}
                  <span className="owner medium">25 Courses</span>
                  <span className="rank bold green"># NIRF</span>
                  <span className="rating">
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                    <img src="/images/star.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="other-details">
              <div className="highlights">
                <div>
                  <span>Accepted Exams</span>
                  <span>ATMA, CAT, CMAT, GMAT, MAT, XAT</span>
                </div>
                <div>
                  <span>Courses Offered</span>
                  <span>0 Courses</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span> 10 L - 12 L</span>
                </div>
                <div>
                  <span>Package Range</span>
                  <span> -</span>
                </div>
                <div>
                  <span>Placement %</span>
                  <span className="green">NA</span>
                </div>
              </div>
              <div className="action-btns">
                <div>
                  <div className="download">
                    <img src="/images/downloads.svg" alt="" />
                    <span>Download Brochure</span>
                  </div>
                  <div className="compare">
                    <img src="/images/compare.svg" alt="" />
                    <span>Compare</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <button onClick={props.openModal}>Apply</button>
                </div>
              </div>
            </div>
          </div>
          <Link className="viewAll-btn" to={""}>
            View All Courses
          </Link>
        </section>

        <section className="facilities mt-10">
          <h2 className="font-bold text-2xl mb-5">Facilities</h2>
          <ul>
            <li>
              <img src={sports} style={{ width: "50px" }} />
              <span>Sports</span>
            </li>
            <li>
              <img src={hostel} style={{ width: "50px" }} />
              <span>Hostel</span>
            </li>
            <li>
              <img src={cafeteria} style={{ width: "50px" }} />
              <span>Cafeteria</span>
            </li>
            <li>
              <img src={library} style={{ width: "50px" }} />
              <span>Library</span>
            </li>
            <li>
              <img src={laboratory} style={{ width: "50px" }} />
              <span>Labs</span>
            </li>
            <li>
              <img src={gym} style={{ width: "50px" }} />
              <span>Gym</span>
            </li>
            <li>
              <img src={bank} style={{ width: "50px" }} />
              <span>Banks</span>
            </li>
            <li>
              <img src={complab} style={{ width: "50px" }} />
              <span>Computer Lab</span>
            </li>
            <li>
              <img src={cafeteria} style={{ width: "50px" }} />
              <span>Cafeteria</span>
            </li>
            <li>
              <img src={medical} style={{ width: "50px" }} />
              <span>Medical</span>
            </li>
            <li>
              <img src={transport} style={{ width: "50px" }} />
              <span>Transport</span>
            </li>
            <li>
              <img src={wifi} style={{ width: "50px" }} />
              <span>Wi Fi</span>
            </li>
          </ul>
        </section>

        <section className="news  mt-10">
          <h2 className="font-bold text-2xl mb-5">Related News and Events</h2>
          <div className="news-wrapper mb-5">
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
          </div>
          <Link className="viewAll-btn" to={""}>
            View All News and Events
          </Link>
        </section>

        <section className="RelatedNews">
          {props.data.courses && (
            <Relatedcolleges
              data={props.data}
              heading={"Related Colleges"}
              vtype="v"
            />
          )}
        </section>
      </div>
    </>
  );
}

export default CollegeOverview;

{
  /* <section>
        <div className="font-bold text-2xl pb-3 pt-3">{college_name}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: college_descripton,
          }}
        ></div>
        <div className="font-bold text-2xl pb-3 pt-3">Courses</div>
        <p>{courses_name}</p>
        <div className="font-bold text-2xl pb-3 pt-3">Faculty Profile</div>
        <div
          dangerouslySetInnerHTML={{
            __html: facultyprofile,
          }}
        ></div>
        <div className="font-bold text-2xl pb-3 pt-3">Placements</div>
        <div
          dangerouslySetInnerHTML={{
            __html: placement_overview,
          }}
        ></div>

        <ul>
          <li>
            <b>Total Placement Ratio :</b> {totalplacementratio}
          </li>
          <li>
            <b>Average Placement Record :</b>
            {averageplacementrecord}
          </li>
          <li>
            <b>Higest Placement Record :</b>
            {higestplacementrecord}
          </li>
          <li>
            <b>Lowest Placement Record :</b>
            {lowestplacementrecord}
          </li>
          <li>
            <b>Top Recruiters :</b> {toprecruiters}
          </li>
          <li>
            <b>Top Recruiting Sectors :</b>
            {toprecuitingsectors}
          </li>
          <li>
            <b>Top Profile :</b> {topprofile}
          </li>
        </ul>
        <div className="font-bold text-2xl pb-3 pt-3">Facility Avaible</div>
        <p>{facility_available}</p>
        <div className="font-bold text-2xl pb-3 pt-3">Address</div>
        <p>
          {address} {address2}
          {city_name}, {state_name}
          {pincode}
        </p>
        <p>{email && "Email: " + email}</p>
        <p>{contactno && "Contact: " + contactno}</p>
        <p>{website && "Website: " + website}</p>
        {/*courses && <Relatedcolleges data={props.data} vtype="v" />
        </section> */
}

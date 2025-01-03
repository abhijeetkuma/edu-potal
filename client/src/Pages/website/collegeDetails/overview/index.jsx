import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Relatedcolleges from "../../college/relatedcolleges";
import Rating from "../../commonComps/ratings";
import Contact from "../../commonComps/contact";
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
    // courses,
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
    sub_course_details
  } = props.data;

  const {courses, openModal} = props;

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

        <section className="about">
          <h2 className="font-bold text-2xl">About {college_name}</h2>
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
        </section>

        <section className="courses college-list-wrapper mt-10">
          <h2 className="font-bold text-2xl mb-5">Top Programs</h2>
          {sub_course_details?.map((item, i) => (
            <div className="college-list-card" id="34">
              <div className="title-section">
                <div className="heart"></div>
                <div className="title-details">
                  <h2>{courses[item.subcourseId]}</h2>
                  <div>
                    {/* <span className="owner medium">25 Courses</span> */}
                    {/* <span className="rank bold green"># NIRF</span> */}
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
                    <span className="text-center">ATMA, CAT, CMAT, GMAT, MAT, XAT</span>
                  </div>
                  <div>
                    <span>Total Fees</span>
                    <span className="text-center"><b>{item.course_fee}</b></span>
                  </div>
                  <div>
                    <span>Eligibility</span>
                    <span className="text-center">{item.subcourseselectiioneligibility}</span>
                  </div>
                  <div>
                    <span>Course Duration</span>
                    <span className="text-center">{item.course_duration} Years</span>
                  </div>
                  <div>
                    <span>Available Seats</span>
                    <span className="text-center">{item.course_seats}</span>
                  </div>
                </div>
                <div className="action-btns">
                  <div>
                    <div className="download" onClick={openModal}>
                      <img src="/images/downloads.svg" alt="" />
                      <span>Download Brochure</span>
                    </div>
                    <div className="compare" onClick={openModal}>
                      {/* <img src="/images/compare.svg" alt="" /> */}
                      <img src="/images/downloads.svg" alt="" />
                      <span>Latest Placements</span>
                    </div>
                  </div>
                  <div className="apply-btn">
                    <button onClick={openModal}>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          ))
          }

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

        <section className="rating  mt-10">
          <h2 className="font-bold text-2xl mb-5">Rating</h2>
          <Rating data={props.data} />
        </section>

        <section className="address mt-10">
          <h2 className="font-bold text-2xl mb-5">Address/Contact</h2>
          <Contact data={props.data} modelOpen={openModal} />
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
          <Link className="viewAll-btn" to={"/exams"}>
            View All News and Events
          </Link>
        </section>
      </div>
    </>
  );
}

export default CollegeOverview;

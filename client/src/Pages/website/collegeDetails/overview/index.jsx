import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Relatedcolleges from "../../college/relatedcolleges";
import Relatednews from "../../college/relatednews";
import Rating from "../../commonComps/ratings";
import Contact from "../../commonComps/contact";
import Facilities from "../../commonComps/facilities";

function CollegeOverview(props) {
  const {
    college_name,
    college_descripton,
    meta_title,
    meta_description,
    meta_keyword,
    display_type,
    highlights,
    sub_course_details,
    facilities,
    city_name,
  } = props.data;

  const { courses, openModal } = props;
  const detailsUrl = location.pathname.split("+")[0];

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
          <ul>
            <li>
              <Link rel="stylesheet" to={`${detailsUrl}+courses-and-fees`}>
                {college_name} {city_name} Courses and Fees 2025
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" to={`${detailsUrl}+admissions`}>
                {college_name} {city_name} Admissions 2025
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" to={`${detailsUrl}+placements`}>
                {college_name} {city_name} Placements 2025
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" to={`${detailsUrl}+scholarships`}>
                {college_name} {city_name} Scholarships 2025
              </Link>
            </li>
            <li>
              <Link rel="stylesheet" to={`${detailsUrl}+faculties`}>
                {college_name} {city_name} Faculties 2025
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
                    <span className="text-center">
                      {item.subcourseselectioncriteria
                        ? item.subcourseselectioncriteria
                        : "NA"}
                    </span>
                  </div>
                  <div>
                    <span>Total Fees</span>
                    <span className="text-center">
                      <b>{item.course_fee}</b>
                    </span>
                  </div>
                  <div>
                    <span>Eligibility</span>
                    <span className="text-center">
                      {item.subcourseselectiioneligibility}
                    </span>
                  </div>
                  <div>
                    <span>Course Duration</span>
                    <span className="text-center">
                      {item.course_duration} Years
                    </span>
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
          ))}

          <Link className="viewAll-btn" to={""}>
            View All Courses
          </Link>
        </section>
        {console.log("facilities-----", facilities)}

        <Facilities data={facilities && facilities} />

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
          {props.data.courses && (
            <Relatednews
              data={props.data}
              heading={"Related News and Events"}
              vtype="h"
            />
          )}
          <Link className="viewAll-btn" to={"/exams"}>
            View All News and Events
          </Link>
        </section>
      </div>
    </>
  );
}

export default CollegeOverview;

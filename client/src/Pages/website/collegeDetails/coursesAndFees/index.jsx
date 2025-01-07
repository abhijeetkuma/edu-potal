import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Relatedcolleges from "../../college/relatedcolleges";
import Relatednews from "../../college/relatednews";

import Rating from "../../commonComps/ratings";
import Contact from "../../commonComps/contact";

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

function CollegeCoursesFees(props) {
  const {
    college_name,
    college_descripton,
    courses_name,
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
    sub_course_details,
    address,
    address2,
    city_name,
    state_name,
    pincode,
    email,
    contactno,
    website,
  } = props.data;

  const { courses, openModal } = props;

  return (
    <>
      <section className="courses-fees">
        <h2 className="font-bold text-2xl mb-5">
          Courses, Eligibility and Fees
        </h2>
        <table className="table-bordered">
          <thead className="table-bordered-head">
            <tr>
              <th>Course</th>
              <th>Fees</th>
              <th>Eligibility</th>
              <th>Total Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-bordered-body">
            {sub_course_details?.map((item, i) => (
              <tr>
                <td>{courses[item.subcourseId]}</td>
                <td>
                    <b>{item.course_fee ? item.course_fee : "-"}</b>
                    <p className="underline text-xs" onClick={openModal}
                    >Get Fee Details</p> 
                </td>
                <td>
                  {item.subcourseselectiioneligibility
                    ? item.subcourseselectiioneligibility
                    : "-"}
                </td>
                <td>{item.course_seats ? item.course_seats : "-"}</td>
                <td>
                  <div className="">
                    <button
                      data-course-tag="18"
                      data-csm-title="Apply Now"
                      data-csm-track="true"
                      data-csm-value="B.Tech"
                      data-event-type="link_click"
                      data-section_name="IIT Kharagpur Fees &amp; Eligibility"
                      type="button"
                      className=""
                      onClick={openModal}
                    >
                      Apply Now
                    </button>
                    <div className=""></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="courses college-list-wrapper">
        <h2 className="font-bold text-2xl mb-5">All Programs</h2>
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
        {props.data.courses && (
          <Relatednews
            data={props.data}
            heading={"Related News and Events"}
            vtype="h"
          />
        )}

        <Link className="viewAll-btn" to={""}>
          View All News and Events
        </Link>
      </section>
    </>
  );
}

export default CollegeCoursesFees;

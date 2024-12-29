import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    const {courses, openModal} = props;

    return (
        <>
            <section className="courses-fees">
                <h2 className="font-bold text-2xl mb-5">Courses, Eligibility and Fees</h2>
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
                    {sub_course_details?.map((item, i)=> (
                        <tr>
                            <td>{courses[item.subcourseId]}</td>
                            <td>{item.course_fee ? item.course_fee : '-'}</td>
                            <td>{item.subcourseselectiioneligibility ? item.subcourseselectiioneligibility : '-'}</td>
                            <td>{item.course_seats ? item.course_seats : '-'}</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="" onClick={openModal}>Apply Now
                                    </button>
                                    <div className=""></div>
                                </div>
                            </td>              
                        </tr>
                    )               
                    )}
                    </tbody>
                </table>
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
                            <img src="/images/compare.svg" alt="" />
                            <span>Compare</span>
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
        </section>
      </section>
    </>
  );
}

export default CollegeCoursesFees;

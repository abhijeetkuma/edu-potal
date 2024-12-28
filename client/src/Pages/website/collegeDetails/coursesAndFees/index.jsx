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

    const {courses, } = props;

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
                            <td>{item.subcourseId}</td>
                            <td>{item.course_fee ? item.course_fee : '-'}</td>
                            <td>{item.subcourseselectiioneligibility ? item.subcourseselectiioneligibility : '-'}</td>
                            <td>{item.course_seats ? item.course_seats : '-'}</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="">Apply Now
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
                    <div class="college-list-card" id="34">
                        <div class="title-section">
                        {/* <div class="img-box">
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
                  <span>Eligibility</span>
                  <span>10+2</span>
                </div>
                <div>
                  <span>Total Seats</span>
                  <span>40</span>
                </div>
                <div>
                  <span>Durations / Time</span>
                  <span>4 Years / Regular</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span>
                    <b>10 L - 12 L</b>
                  </span>
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
                  {/* <div className="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                  <div className="apply-btn">
                    <button>Apply</button>
                  </div>
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
                  <span>Eligibility</span>
                  <span>10+2</span>
                </div>
                <div>
                  <span>Total Seats</span>
                  <span>40</span>
                </div>
                <div>
                  <span>Durations / Time</span>
                  <span>4 Years / Regular</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span>
                    <b>10 L - 12 L</b>
                  </span>
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
                  {/* <div className="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                  <div className="apply-btn">
                    <button>Apply</button>
                  </div>
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
                  <span>Eligibility</span>
                  <span>10+2</span>
                </div>
                <div>
                  <span>Total Seats</span>
                  <span>40</span>
                </div>
                <div>
                  <span>Durations / Time</span>
                  <span>4 Years / Regular</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span>
                    <b>10 L - 12 L</b>
                  </span>
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
                  {/* <div className="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                  <div className="apply-btn">
                    <button>Apply</button>
                  </div>
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
                  <span>Eligibility</span>
                  <span>10+2</span>
                </div>
                <div>
                  <span>Total Seats</span>
                  <span>40</span>
                </div>
                <div>
                  <span>Durations / Time</span>
                  <span>4 Years / Regular</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span>
                    <b>10 L - 12 L</b>
                  </span>
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
                  {/* <div className="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                  <div className="apply-btn">
                    <button>Apply</button>
                  </div>
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
                  <span>Eligibility</span>
                  <span>10+2</span>
                </div>
                <div>
                  <span>Total Seats</span>
                  <span>40</span>
                </div>
                <div>
                  <span>Durations / Time</span>
                  <span>4 Years / Regular</span>
                </div>
                <div>
                  <span>Total Fees Range</span>
                  <span>
                    <b>10 L - 12 L</b>
                  </span>
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
                  {/* <div className="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                  <div className="apply-btn">
                    <button>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default CollegeCoursesFees;

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
        address,
        address2,
        city_name,
        state_name,
        pincode,
        email,
        contactno,
        website,
    } = props.data

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
                            <th>Application Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="table-bordered-body">
                        <tr>
                            <td data-csm-title="B.Tech" data-csm-track="true" data-event-type="top_course_popup"
                                className="">
                                <div>B.Tech</div>
                                <div className="course-no">17 Courses
                                    <span className=""></span>
                                </div>
                            </td>
                            <td>
                                <a data-csm-title="B.Tech" data-ga-module="college_detail" data-ga-section="IIT Kharagpur Fees &amp; Eligibility" data-ga-title="B.Tech" data-ga-track="true" className="link" href="#">₹2.62 Lakhs (1st Year Fees)
                                </a>
                                <button className="" data-csm-title="B.Tech check fees details" data-csm-track="true" data-event-type="tct_fee_details" type="button">
                                    <span className="">Check Details
                                        <span className=""></span>
                                    </span>
                                </button>
                            </td>
                            <td>10+2 with 75% + JEE Advanced</td>
                            <td>27 Apr - 18 Jun 2024</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="">Apply Now
                                    </button>
                                    <div className=""></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-csm-title="B.Tech" data-csm-track="true" data-event-type="top_course_popup"
                                className="">
                                <div>B.Tech</div>
                                <div className="course-no">17 Courses
                                    <span className=""></span>
                                </div>
                            </td>
                            <td>
                                <a data-csm-title="B.Tech" data-ga-module="college_detail" data-ga-section="IIT Kharagpur Fees &amp; Eligibility" data-ga-title="B.Tech" data-ga-track="true" className="link" href="#">₹2.62 Lakhs (1st Year Fees)
                                </a>
                                <button className="" data-csm-title="B.Tech check fees details" data-csm-track="true" data-event-type="tct_fee_details" type="button">
                                    <span className="">Check Details
                                        <span className=""></span>
                                    </span>
                                </button>
                            </td>
                            <td>10+2 with 75% + JEE Advanced</td>
                            <td>27 Apr - 18 Jun 2024</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="">Apply Now
                                    </button>
                                    <div className=""></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-csm-title="B.Tech" data-csm-track="true" data-event-type="top_course_popup"
                                className="">
                                <div>B.Tech</div>
                                <div className="course-no">17 Courses
                                    <span className=""></span>
                                </div>
                            </td>
                            <td>
                                <a data-csm-title="B.Tech" data-ga-module="college_detail" data-ga-section="IIT Kharagpur Fees &amp; Eligibility" data-ga-title="B.Tech" data-ga-track="true" className="link" href="#">₹2.62 Lakhs (1st Year Fees)
                                </a>
                                <button className="" data-csm-title="B.Tech check fees details" data-csm-track="true" data-event-type="tct_fee_details" type="button">
                                    <span className="">Check Details
                                        <span className=""></span>
                                    </span>
                                </button>
                            </td>
                            <td>10+2 with 75% + JEE Advanced</td>
                            <td>27 Apr - 18 Jun 2024</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="">Apply Now
                                    </button>
                                    <div className=""></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-csm-title="B.Tech" data-csm-track="true" data-event-type="top_course_popup"
                                className="">
                                <div>B.Tech</div>
                                <div className="course-no">17 Courses
                                    <span className=""></span>
                                </div>
                            </td>
                            <td>
                                <a data-csm-title="B.Tech" data-ga-module="college_detail" data-ga-section="IIT Kharagpur Fees &amp; Eligibility" data-ga-title="B.Tech" data-ga-track="true" className="link" href="#">₹2.62 Lakhs (1st Year Fees)
                                </a>
                                <button className="" data-csm-title="B.Tech check fees details" data-csm-track="true" data-event-type="tct_fee_details" type="button">
                                    <span className="">Check Details
                                        <span className=""></span>
                                    </span>
                                </button>
                            </td>
                            <td>10+2 with 75% + JEE Advanced</td>
                            <td>27 Apr - 18 Jun 2024</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="">Apply Now
                                    </button>
                                    <div className=""></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-csm-title="B.Tech" data-csm-track="true" data-event-type="top_course_popup"
                                className="">
                                <div>B.Tech</div>
                                <div className="course-no">17 Courses
                                    <span className=""></span>
                                </div>
                            </td>
                            <td>
                                <a data-csm-title="B.Tech" data-ga-module="college_detail" data-ga-section="IIT Kharagpur Fees &amp; Eligibility" data-ga-title="B.Tech" data-ga-track="true" className="link" href="#">₹2.62 Lakhs (1st Year Fees)
                                </a>
                                <button className="" data-csm-title="B.Tech check fees details" data-csm-track="true" data-event-type="tct_fee_details" type="button">
                                    <span className="">Check Details
                                        <span className=""></span>
                                    </span>
                                </button>
                            </td>
                            <td>10+2 with 75% + JEE Advanced</td>
                            <td>27 Apr - 18 Jun 2024</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="">Apply Now
                                    </button>
                                    <div className=""></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-csm-title="B.Tech" data-csm-track="true" data-event-type="top_course_popup"
                                className="">
                                <div>B.Tech</div>
                                <div className="course-no">17 Courses
                                    <span className=""></span>
                                </div>
                            </td>
                            <td>
                                <a data-csm-title="B.Tech" data-ga-module="college_detail" data-ga-section="IIT Kharagpur Fees &amp; Eligibility" data-ga-title="B.Tech" data-ga-track="true" className="link" href="#">₹2.62 Lakhs (1st Year Fees)
                                </a>
                                <button className="" data-csm-title="B.Tech check fees details" data-csm-track="true" data-event-type="tct_fee_details" type="button">
                                    <span className="">Check Details
                                        <span className=""></span>
                                    </span>
                                </button>
                            </td>
                            <td>10+2 with 75% + JEE Advanced</td>
                            <td>27 Apr - 18 Jun 2024</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="">Apply Now
                                    </button>
                                    <div className=""></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-csm-title="B.Tech" data-csm-track="true" data-event-type="top_course_popup"
                                className="">
                                <div>B.Tech</div>
                                <div className="course-no">17 Courses
                                    <span className=""></span>
                                </div>
                            </td>
                            <td>
                                <a data-csm-title="B.Tech" data-ga-module="college_detail" data-ga-section="IIT Kharagpur Fees &amp; Eligibility" data-ga-title="B.Tech" data-ga-track="true" className="link" href="#">₹2.62 Lakhs (1st Year Fees)
                                </a>
                                <button className="" data-csm-title="B.Tech check fees details" data-csm-track="true" data-event-type="tct_fee_details" type="button">
                                    <span className="">Check Details
                                        <span className=""></span>
                                    </span>
                                </button>
                            </td>
                            <td>10+2 with 75% + JEE Advanced</td>
                            <td>27 Apr - 18 Jun 2024</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="">Apply Now
                                    </button>
                                    <div className=""></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td data-csm-title="B.Tech" data-csm-track="true" data-event-type="top_course_popup"
                                className="">
                                <div>B.Tech</div>
                                <div className="course-no">17 Courses
                                    <span className=""></span>
                                </div>
                            </td>
                            <td>
                                <a data-csm-title="B.Tech" data-ga-module="college_detail" data-ga-section="IIT Kharagpur Fees &amp; Eligibility" data-ga-title="B.Tech" data-ga-track="true" className="link" href="#">₹2.62 Lakhs (1st Year Fees)
                                </a>
                                <button className="" data-csm-title="B.Tech check fees details" data-csm-track="true" data-event-type="tct_fee_details" type="button">
                                    <span className="">Check Details
                                        <span className=""></span>
                                    </span>
                                </button>
                            </td>
                            <td>10+2 with 75% + JEE Advanced</td>
                            <td>27 Apr - 18 Jun 2024</td>
                            <td>
                                <div className="">
                                    <button data-course-tag="18" data-csm-title="Apply Now" data-csm-track="true" data-csm-value="B.Tech" data-event-type="link_click" data-section_name="IIT Kharagpur Fees &amp; Eligibility" type="button" className="">Apply Now
                                    </button>
                                    <div className=""></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <section className="courses college-list-wrapper">
                    <h2 className="font-bold text-2xl mb-5">All Programs</h2>
                    <div class="college-list-card" id="34">
                        <div class="title-section">
                        {/* <div class="img-box">
                            <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                            </div> */}
                        <div class="heart"></div>
                        <div class="title-details">
                            <h2>M.Sc</h2>
                            <div>
                            {/* <span class="location">
                                        <img src="/images/map-icon.png" alt="" />
                                        <span>Mumbai City, Maharashtra</span>
                                    </span>
                                    <span class="tieup">AICTE, AIU, UGC</span> */}
                            <span class="owner medium">25 Courses</span>
                            <span class="rank bold green"># NIRF</span>
                            <span class="rating">
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                            </span>
                            </div>
                        </div>
                        </div>
                        <div class="other-details">
                        <div class="highlights">
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
                            <span><b>10 L - 12 L</b></span>
                            </div>
                            <div>
                            <span>Package Range</span>
                            <span> -</span>
                            </div>
                            <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                            </div>
                        </div>
                        <div class="action-btns">
                            <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt="" />
                                <span>Download Brochure</span>
                            </div>
                            {/* <div class="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                            <div class="apply-btn">
                                <button>Apply</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="college-list-card" id="34">
                        <div class="title-section">
                        {/* <div class="img-box">
                            <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                            </div> */}
                        <div class="heart"></div>
                        <div class="title-details">
                            <h2>M.Sc</h2>
                            <div>
                            {/* <span class="location">
                                        <img src="/images/map-icon.png" alt="" />
                                        <span>Mumbai City, Maharashtra</span>
                                    </span>
                                    <span class="tieup">AICTE, AIU, UGC</span> */}
                            <span class="owner medium">25 Courses</span>
                            <span class="rank bold green"># NIRF</span>
                            <span class="rating">
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                            </span>
                            </div>
                        </div>
                        </div>
                        <div class="other-details">
                        <div class="highlights">
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
                            <span><b>10 L - 12 L</b></span>
                            </div>
                            <div>
                            <span>Package Range</span>
                            <span> -</span>
                            </div>
                            <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                            </div>
                        </div>
                        <div class="action-btns">
                            <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt="" />
                                <span>Download Brochure</span>
                            </div>
                            {/* <div class="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                            <div class="apply-btn">
                                <button>Apply</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="college-list-card" id="34">
                        <div class="title-section">
                        {/* <div class="img-box">
                            <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                            </div> */}
                        <div class="heart"></div>
                        <div class="title-details">
                            <h2>M.Sc</h2>
                            <div>
                            {/* <span class="location">
                                        <img src="/images/map-icon.png" alt="" />
                                        <span>Mumbai City, Maharashtra</span>
                                    </span>
                                    <span class="tieup">AICTE, AIU, UGC</span> */}
                            <span class="owner medium">25 Courses</span>
                            <span class="rank bold green"># NIRF</span>
                            <span class="rating">
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                            </span>
                            </div>
                        </div>
                        </div>
                        <div class="other-details">
                        <div class="highlights">
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
                            <span><b>10 L - 12 L</b></span>
                            </div>
                            <div>
                            <span>Package Range</span>
                            <span> -</span>
                            </div>
                            <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                            </div>
                        </div>
                        <div class="action-btns">
                            <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt="" />
                                <span>Download Brochure</span>
                            </div>
                            {/* <div class="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                            <div class="apply-btn">
                                <button>Apply</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="college-list-card" id="34">
                        <div class="title-section">
                        {/* <div class="img-box">
                            <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                            </div> */}
                        <div class="heart"></div>
                        <div class="title-details">
                            <h2>M.Sc</h2>
                            <div>
                            {/* <span class="location">
                                        <img src="/images/map-icon.png" alt="" />
                                        <span>Mumbai City, Maharashtra</span>
                                    </span>
                                    <span class="tieup">AICTE, AIU, UGC</span> */}
                            <span class="owner medium">25 Courses</span>
                            <span class="rank bold green"># NIRF</span>
                            <span class="rating">
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                            </span>
                            </div>
                        </div>
                        </div>
                        <div class="other-details">
                        <div class="highlights">
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
                            <span><b>10 L - 12 L</b></span>
                            </div>
                            <div>
                            <span>Package Range</span>
                            <span> -</span>
                            </div>
                            <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                            </div>
                        </div>
                        <div class="action-btns">
                            <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt="" />
                                <span>Download Brochure</span>
                            </div>
                            {/* <div class="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                            <div class="apply-btn">
                                <button>Apply</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="college-list-card" id="34">
                        <div class="title-section">
                        {/* <div class="img-box">
                            <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                            </div> */}
                        <div class="heart"></div>
                        <div class="title-details">
                            <h2>M.Sc</h2>
                            <div>
                            {/* <span class="location">
                                        <img src="/images/map-icon.png" alt="" />
                                        <span>Mumbai City, Maharashtra</span>
                                    </span>
                                    <span class="tieup">AICTE, AIU, UGC</span> */}
                            <span class="owner medium">25 Courses</span>
                            <span class="rank bold green"># NIRF</span>
                            <span class="rating">
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                            </span>
                            </div>
                        </div>
                        </div>
                        <div class="other-details">
                        <div class="highlights">
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
                            <span><b>10 L - 12 L</b></span>
                            </div>
                            <div>
                            <span>Package Range</span>
                            <span> -</span>
                            </div>
                            <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                            </div>
                        </div>
                        <div class="action-btns">
                            <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt="" />
                                <span>Download Brochure</span>
                            </div>
                            {/* <div class="compare">
                                <img src="/images/compare.svg" alt="" />
                                <span>Compare</span>
                            </div> */}
                            <div class="apply-btn">
                                <button>Apply</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default CollegeCoursesFees;
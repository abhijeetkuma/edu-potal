import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Relatedcolleges from "../../college/relatedcolleges";
import adsImg from "/images/ads.svg";

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
  } = props.data;

  return (
    <>
    <div className="overview-details">
        <section className="latestNews">
            <h2 className="font-bold text-2xl">Noticeboard</h2>
            <ul className="mt-2">
                <li>
                    <b>23-Dec-2024</b>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                </li>
                <li>
                    <b>03-Jan-2025</b>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>          
                </li>
            </ul>
        </section>
        <section className="about mt-10">
            <h2 className="font-bold text-2xl">About</h2>
            <p className="mt-2">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </section>
        <section className="tableOfContent mt-10">
            <h2 className="font-bold text-2xl">Table of Content</h2>
            <ul className="mt-2">
                <li>
                    <Link rel="stylesheet" href="" >Courses and Fees</Link>
                </li>
                <li>
                    <Link rel="stylesheet" href="" >Admissions</Link>
                </li>
                <li>
                    <Link rel="stylesheet" href="" >Placememts</Link>
                </li>
                <li>
                    <Link rel="stylesheet" href="" >Scholarships</Link>
                </li>
                <li>
                    <Link rel="stylesheet" href="" >Faculties</Link>
                </li>
            </ul>
        </section>
        <section className="courses college-list-wrapper mt-10">
            <h2 className="font-bold text-2xl mb-5">All Programs</h2>
            <div class="college-list-card" id="34">
                <div class="title-section">
                {/* <div class="img-box">
                <img src="https://timesofcollege.com/assets/logo_1730984798442-86567989logo-B8_AwyHu.png" alt="ATLAS SkillTech University" />
                </div> */}
                <div class="heart"></div>
                <div class="title-details">
                    <h2>B.E. / B.Tech</h2>
                    <div>
                        {/* <span class="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span class="tieup">AICTE, AIU, UGC</span> */}
                        <span class="owner medium">25 Courses</span>
                        <span class="rank bold green"># NIRF</span>
                        <span class="rating">
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                        </span>
                    </div>
                </div>
                </div>
                <div class="other-details">
                    <div class="highlights">
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
                            <span>  -</span>
                        </div>
                        <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                        </div>
                    </div>
                    <div class="action-btns">
                        <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt=""/>
                                <span>Download Brochure</span>
                            </div>
                            <div class="compare">
                                <img src="/images/compare.svg" alt=""/>
                                <span>Compare</span>
                            </div>
                        </div>
                        <div class="apply-btn">
                            <button>Apply</button>
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
                    <h2>B.Sc</h2>
                    <div>
                        {/* <span class="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span class="tieup">AICTE, AIU, UGC</span> */}
                        <span class="owner medium">25 Courses</span>
                        <span class="rank bold green"># NIRF</span>
                        <span class="rating">
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                        </span>
                    </div>
                </div>
                </div>
                <div class="other-details">
                    <div class="highlights">
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
                            <span>  -</span>
                        </div>
                        <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                        </div>
                    </div>
                    <div class="action-btns">
                        <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt=""/>
                                <span>Download Brochure</span>
                            </div>
                            <div class="compare">
                                <img src="/images/compare.svg" alt=""/>
                                <span>Compare</span>
                            </div>
                        </div>
                        <div class="apply-btn">
                            <button>Apply</button>
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
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                        </span>
                    </div>
                </div>
                </div>
                <div class="other-details">
                    <div class="highlights">
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
                            <span>  -</span>
                        </div>
                        <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                        </div>
                    </div>
                    <div class="action-btns">
                        <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt=""/>
                                <span>Download Brochure</span>
                            </div>
                            <div class="compare">
                                <img src="/images/compare.svg" alt=""/>
                                <span>Compare</span>
                            </div>
                        </div>
                        <div class="apply-btn">
                            <button>Apply</button>
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
                    <h2>B.E. / B.Tech</h2>
                    <div>
                        {/* <span class="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span class="tieup">AICTE, AIU, UGC</span> */}
                        <span class="owner medium">25 Courses</span>
                        <span class="rank bold green"># NIRF</span>
                        <span class="rating">
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                        </span>
                    </div>
                </div>
                </div>
                <div class="other-details">
                    <div class="highlights">
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
                            <span>  -</span>
                        </div>
                        <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                        </div>
                    </div>
                    <div class="action-btns">
                        <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt=""/>
                                <span>Download Brochure</span>
                            </div>
                            <div class="compare">
                                <img src="/images/compare.svg" alt=""/>
                                <span>Compare</span>
                            </div>
                        </div>
                        <div class="apply-btn">
                            <button>Apply</button>
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
                    <h2>B.E. / B.Tech</h2>
                    <div>
                        {/* <span class="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span class="tieup">AICTE, AIU, UGC</span> */}
                        <span class="owner medium">25 Courses</span>
                        <span class="rank bold green"># NIRF</span>
                        <span class="rating">
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                        </span>
                    </div>
                </div>
                </div>
                <div class="other-details">
                    <div class="highlights">
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
                            <span>  -</span>
                        </div>
                        <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                        </div>
                    </div>
                    <div class="action-btns">
                        <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt=""/>
                                <span>Download Brochure</span>
                            </div>
                            <div class="compare">
                                <img src="/images/compare.svg" alt=""/>
                                <span>Compare</span>
                            </div>
                        </div>
                        <div class="apply-btn">
                            <button>Apply</button>
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
                    <h2>B.E. / B.Tech</h2>
                    <div>
                        {/* <span class="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span class="tieup">AICTE, AIU, UGC</span> */}
                        <span class="owner medium">25 Courses</span>
                        <span class="rank bold green"># NIRF</span>
                        <span class="rating">
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                        </span>
                    </div>
                </div>
                </div>
                <div class="other-details">
                    <div class="highlights">
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
                            <span>  -</span>
                        </div>
                        <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                        </div>
                    </div>
                    <div class="action-btns">
                        <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt=""/>
                                <span>Download Brochure</span>
                            </div>
                            <div class="compare">
                                <img src="/images/compare.svg" alt=""/>
                                <span>Compare</span>
                            </div>
                        </div>
                        <div class="apply-btn">
                            <button>Apply</button>
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
                    <h2>B.E. / B.Tech</h2>
                    <div>
                        {/* <span class="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span class="tieup">AICTE, AIU, UGC</span> */}
                        <span class="owner medium">25 Courses</span>
                        <span class="rank bold green"># NIRF</span>
                        <span class="rating">
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                        </span>
                    </div>
                </div>
                </div>
                <div class="other-details">
                    <div class="highlights">
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
                            <span>  -</span>
                        </div>
                        <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                        </div>
                    </div>
                    <div class="action-btns">
                        <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt=""/>
                                <span>Download Brochure</span>
                            </div>
                            <div class="compare">
                                <img src="/images/compare.svg" alt=""/>
                                <span>Compare</span>
                            </div>
                        </div>
                        <div class="apply-btn">
                            <button>Apply</button>
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
                    <h2>B.E. / B.Tech</h2>
                    <div>
                        {/* <span class="location">
                            <img src="/images/map-icon.png" alt="" />
                            <span>Mumbai City, Maharashtra</span>
                        </span>
                        <span class="tieup">AICTE, AIU, UGC</span> */}
                        <span class="owner medium">25 Courses</span>
                        <span class="rank bold green"># NIRF</span>
                        <span class="rating">
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                            <img src="/images/star.png" alt=""/>
                        </span>
                    </div>
                </div>
                </div>
                <div class="other-details">
                    <div class="highlights">
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
                            <span>  -</span>
                        </div>
                        <div>
                            <span>Placement %</span>
                            <span class="green">NA</span>
                        </div>
                    </div>
                    <div class="action-btns">
                        <div>
                            <div class="download">
                                <img src="/images/downloads.svg" alt=""/>
                                <span>Download Brochure</span>
                            </div>
                            <div class="compare">
                                <img src="/images/compare.svg" alt=""/>
                                <span>Compare</span>
                            </div>
                        </div>
                        <div class="apply-btn">
                            <button>Apply</button>
                        </div>
                    </div>
                    </div>
            </div>
            <Link className="viewAll-btn" to={''}>View All Courses</Link>
        </section>  
        <section className="news  mt-10">
            <h2 className="font-bold text-2xl mb-5">Related News and Events</h2>
            <div className="news-wrapper mb-5">
                <div class="news-card">
                    <div class="heading">
                        <h3>Maha TET Admit Card 2024 Live Updates</h3>
                    </div>
                    <div class="date"></div>
                    <p class="details">
                        Maha TET admit card 2024 will be released today, October 28, 2024. The Maha TET 2024 admit card will be available for download till November 10, 2024. 
                    </p>
                    <hr class="hr-x"/>
                    <span class="link">
                        <a href="exam/maha-tet-admit-card-2024-live-updates">Continue Reading... </a>
                    </span>
                </div>
                <div class="news-card">
                    <div class="heading">
                        <h3>Maha TET Admit Card 2024 Live Updates</h3>
                    </div>
                    <div class="date"></div>
                    <p class="details">
                        Maha TET admit card 2024 will be released today, October 28, 2024. The Maha TET 2024 admit card will be available for download till November 10, 2024. 
                    </p>
                    <hr class="hr-x"/>
                    <span class="link">
                        <a href="exam/maha-tet-admit-card-2024-live-updates">Continue Reading... </a>
                    </span>
                </div>
                <div class="news-card">
                    <div class="heading">
                        <h3>Maha TET Admit Card 2024 Live Updates</h3>
                    </div>
                    <div class="date"></div>
                    <p class="details">
                        Maha TET admit card 2024 will be released today, October 28, 2024. The Maha TET 2024 admit card will be available for download till November 10, 2024. 
                    </p>
                    <hr class="hr-x"/>
                    <span class="link">
                        <a href="exam/maha-tet-admit-card-2024-live-updates">Continue Reading... </a>
                    </span>
                </div>
                <div class="news-card">
                    <div class="heading">
                        <h3>Maha TET Admit Card 2024 Live Updates</h3>
                    </div>
                    <div class="date"></div>
                    <p class="details">
                        Maha TET admit card 2024 will be released today, October 28, 2024. The Maha TET 2024 admit card will be available for download till November 10, 2024. 
                    </p>
                    <hr class="hr-x"/>
                    <span class="link">
                        <a href="exam/maha-tet-admit-card-2024-live-updates">Continue Reading... </a>
                    </span>
                </div>
                <div class="news-card">
                    <div class="heading">
                        <h3>Maha TET Admit Card 2024 Live Updates</h3>
                    </div>
                    <div class="date"></div>
                    <p class="details">
                        Maha TET admit card 2024 will be released today, October 28, 2024. The Maha TET 2024 admit card will be available for download till November 10, 2024. 
                    </p>
                    <hr class="hr-x"/>
                    <span class="link">
                        <a href="exam/maha-tet-admit-card-2024-live-updates">Continue Reading... </a>
                    </span>
                </div>
                <div class="news-card">
                    <div class="heading">
                        <h3>Maha TET Admit Card 2024 Live Updates</h3>
                    </div>
                    <div class="date"></div>
                    <p class="details">
                        Maha TET admit card 2024 will be released today, October 28, 2024. The Maha TET 2024 admit card will be available for download till November 10, 2024. 
                    </p>
                    <hr class="hr-x"/>
                    <span class="link">
                        <a href="exam/maha-tet-admit-card-2024-live-updates">Continue Reading... </a>
                    </span>
                </div>
                <div class="news-card">
                    <div class="heading">
                        <h3>Maha TET Admit Card 2024 Live Updates</h3>
                    </div>
                    <div class="date"></div>
                    <p class="details">
                        Maha TET admit card 2024 will be released today, October 28, 2024. The Maha TET 2024 admit card will be available for download till November 10, 2024. 
                    </p>
                    <hr class="hr-x"/>
                    <span class="link">
                        <a href="exam/maha-tet-admit-card-2024-live-updates">Continue Reading... </a>
                    </span>
                </div>
                <div class="news-card">
                    <div class="heading">
                        <h3>Maha TET Admit Card 2024 Live Updates</h3>
                    </div>
                    <div class="date"></div>
                    <p class="details">
                        Maha TET admit card 2024 will be released today, October 28, 2024. The Maha TET 2024 admit card will be available for download till November 10, 2024. 
                    </p>
                    <hr class="hr-x"/>
                    <span class="link">
                        <a href="exam/maha-tet-admit-card-2024-live-updates">Continue Reading... </a>
                    </span>
                </div>
            </div>
            <Link className="viewAll-btn" to={''}>View All News and Events</Link>
        </section>     
    </div>
    </>
  );
}

export default CollegeOverview;


      {/* <section>
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
        </section> */}
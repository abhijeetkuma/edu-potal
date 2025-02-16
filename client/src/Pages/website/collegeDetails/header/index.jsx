import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

function CollegeHeaders(props) {
  const { tabName, collageUrl } = props;
  const detailsUrl = location.pathname.split("+")[0];
  const adminssinyear = new Date();

  return (
    <>
      <div className="detailsTab">
        <ul>
          <li
            className={
              tabName === "overview" || tabName == undefined ? "active" : ""
            }
          >
            <Link to={`${detailsUrl}+overview`}>Overview</Link>
          </li>
          <li className={tabName === "courses-and-fees" ? "active" : ""}>
            <Link to={`${detailsUrl}+courses-and-fees`}>Courses & Fees</Link>
          </li>
          <li className={tabName === "admissions" ? "active" : ""}>
            <Link to={`${detailsUrl}+admissions`}>
              Admission {adminssinyear.getFullYear()}
            </Link>
          </li>
          <li className={tabName === "placements" ? "active" : ""}>
            <Link to={`${detailsUrl}+placements`}>
              Placements {adminssinyear.getFullYear() - 1}
            </Link>
          </li>
          <li className={tabName === "scholarships" ? "active" : ""}>
            <Link to={`${detailsUrl}+scholarships`}>Scholarships</Link>
          </li>
          <li className={tabName === "faculties" ? "active" : ""}>
            <Link to={`${detailsUrl}+faculties`}>Faculties</Link>
          </li>
          <li className={tabName === "gallery" ? "active" : ""}>
            <Link to={`${detailsUrl}+gallery`}>Gallery</Link>
          </li>
          <li className={tabName === "reviews" ? "active" : ""}>
            <Link to={`${detailsUrl}+reviews`}>Reviews</Link>
          </li>
          <li className={tabName === "news" ? "active" : ""}>
            <Link to={`${detailsUrl}+news`}>News</Link>
          </li>
          <li className={tabName === "question-answer" ? "active" : ""}>
            <Link to={`${detailsUrl}+question-answer`}>Q&A</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CollegeHeaders;

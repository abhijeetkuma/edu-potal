import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import adsImg from "/images/ads.svg";
import mapIcon from "/images/map-icon.png";
import star from "/images/star.png";


function Collegedetails(props) {
  const [displaycollegdetail, setDisplaycollegdetail] = useState({
    cid: "",
    college_name: "",
    college_description: "",
  });
  const { college_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/collegedetail/" + college_url)
      .then((response) => {
        setDisplaycollegdetail(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);

  //console.log(cms_url);
  return (
    <>
    <section className="detailsBanner">
      <div className="bgColor">
        <div className="container detaisHead">
            <div className="image">
              {/* <img src="#" alt="college logo" /> */}
            </div>
            <div className="title">
              <h1>
                {displaycollegdetail.college_name}
              </h1>
            </div>
        </div>
        <div className="container otherInfo">
            <ul className="rankInfo">
              <li>
              <span className="location">
                <img src={mapIcon} alt="" />
                <span>{'Agra'}</span>
              </span>
              </li>
              <li>
              <span className="clg-rating">
                <img src={star} alt="" />
                <span>4.5 (55)</span>
              </span>
              </li>
              <li>
              <span className="nirfRank">
                <b>#NIRF </b>
                <span> 5</span>
              </span>
              </li>
            </ul>
        </div>
      </div>

    </section>
    <section className="container detailsTab">
      <ul>
          <li>
            <Link to='#' className="active">Overview</Link>
          </li>
          <li>
            <Link to='#'>Courses & Fees</Link>
          </li>
          <li>
            <Link to='#'>Admission 2024</Link>
          </li>
          <li>
            <Link to='#'>Placements</Link>
          </li>
          <li>
            <Link to='#'>Scholarships</Link>
          </li>
          <li>
            <Link to='#'>Faculties</Link>
          </li>
          <li>
            <Link to='#'>Gallery</Link>
          </li>
          <li>
            <Link to='#'>Reviews</Link>
          </li>
          <li>
            <Link to='#'>News</Link>
          </li>
          <li>
            <Link to='#'>Q&A</Link>
          </li>
      </ul>
    </section>
      <section className="container college-filter-wrapper">
        <section className="college-list-wrapper">
          <div className="font-bold text-2xl pb-3 pt-3">
            {displaycollegdetail.college_name}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: displaycollegdetail.college_descripton,
            }}
          ></div>
          <div className="font-bold text-2xl pb-3 pt-3">Faculty Profile</div>
          <div
            dangerouslySetInnerHTML={{
              __html: displaycollegdetail.facultyprofile,
            }}
          ></div>
          <div className="font-bold text-2xl pb-3 pt-3">Placements</div>
          <ul>
            <li>
              <b>Total Placement Ratio :</b>{" "}
              {displaycollegdetail.totalplacementratio}
            </li>
            <li>
              <b>Average Placement Record :</b>
              {displaycollegdetail.averageplacementrecord}
            </li>
            <li>
              <b>Higest Placement Record :</b>
              {displaycollegdetail.higestplacementrecord}
            </li>
            <li>
              <b>Lowest Placement Record :</b>
              {displaycollegdetail.lowestplacementrecord}
            </li>
            <li>
              <b>Top Recruiters :</b> {displaycollegdetail.toprecruiters}
            </li>
            <li>
              <b>Top Recruiting Sectors :</b>{" "}
              {displaycollegdetail.toprecuitingsectors}
            </li>
            <li>
              <b>Top Profile :</b> {displaycollegdetail.topprofile}
            </li>
          </ul>
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
    </>
  );
}
Collegedetails.propTypes = {};

export default Collegedetails;

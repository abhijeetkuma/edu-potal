import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import adsImg from "/images/ads.svg";

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

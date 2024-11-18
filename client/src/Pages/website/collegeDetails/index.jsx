import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { getImageURL } from "../../../utils/utils-image";
import Relatedcolleges from "../college/relatedcolleges";

import adsImg from "/images/ads.svg";
import mapIcon from "/images/map-icon.png";
import star from "/images/star.png";

import Details from "../college/details";
import Tabs from "./header";

import CollegeOverview from "./overview";
import CollegeCoursesFees from "./coursesAndFees";
import CollegeAdmissions from "./admissions";
import CollegePlacements from "./placements";
import CollegeScholarships from "./scholarships";
import CollegeFaculties from "./faculties";
import CollegeGallery from "./gallery";
import CollegeReviews from "./reviews";
import CollegeNews from "./news";
import CollegeQuesAns from "./questionAnswer";

function CollegeDetails(props) {
  const [nameUrl, setNameUrl] = useState("");
  const [tabName, setTabName] = useState("");
  const { college_url } = useParams();

  useEffect(() => {
    const detailsUrl = location.pathname.split("+")[0];
    const detailsTabs = location.pathname.split("+")[1];
    console.log("detailsTabs-=-=-=-->", detailsTabs);

    setNameUrl(detailsUrl);
    setTabName(detailsTabs);
  }, [location.pathname]);

  const [displaycollegdetail, setDisplaycollegdetail] = useState({
    cid: "",
    college_name: "",
    college_description: "",
  });

  useEffect(() => {
    axios
      .get("/api/collegedetail/" + college_url.split("+")[0])
      .then((response) => {
        setDisplaycollegdetail(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, [nameUrl]);

  return (
    <>
      <section className="detailsBanner">
        <div className="bgColor">
          <div className="container detaisHead">
            <div className="image">
              <img
                src={getImageURL(displaycollegdetail.logo)}
                alt="college logo"
              />
            </div>
            <div className="title">
              <h1>{displaycollegdetail.college_name}</h1>
            </div>
          </div>
          <div className="container otherInfo">
            <ul className="rankInfo">
              <li>
                <span className="location">
                  <img src={mapIcon} alt="" />
                  <span>
                    {displaycollegdetail.city_name},{" "}
                    {displaycollegdetail.state_name}
                  </span>
                </span>
              </li>
              <li>
                <span className="location">
                  <span>{displaycollegdetail.college_types}</span>
                </span>
              </li>
              <li>
                <span className="location">
                  <span>Est. {displaycollegdetail.found_year}</span>
                </span>
              </li>
              <li>
                <span className="location">
                  <span>{displaycollegdetail.approved_by}</span>
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

      <Tabs tabName={tabName} collageUrl={nameUrl} />

      <section className="container detailsWrapper">
        <div className="contentWrapper">
          {(tabName === "overview" || tabName == undefined) && (
            <CollegeOverview data={displaycollegdetail} />
          )}
          {tabName === "courses-and-fees" && (
            <CollegeCoursesFees data={displaycollegdetail} />
          )}
          {tabName === "admissions" && (
            <CollegeAdmissions data={displaycollegdetail} />
          )}
          {tabName === "placements" && (
            <CollegePlacements data={displaycollegdetail} />
          )}
          {tabName === "scholarships" && (
            <CollegeScholarships data={displaycollegdetail} />
          )}
          {tabName === "faculties" && (
            <CollegeFaculties data={displaycollegdetail} />
          )}
          {tabName === "gallery" && (
            <CollegeGallery data={displaycollegdetail} />
          )}
          {tabName === "reviews" && (
            <CollegeReviews data={displaycollegdetail} />
          )}
          {tabName === "news" && <CollegeNews data={displaycollegdetail} />}
          {tabName === "question-answer" && (
            <CollegeQuesAns data={displaycollegdetail} />
          )}
        </div>
        <div className="relatedWrapper">
          <div className="others">
            <Relatedcolleges data={displaycollegdetail} vtype="v" />
            <div className="ads">
              <img src={adsImg} alt="" />
            </div>
            <div className="ads">
              <img src={adsImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CollegeDetails;

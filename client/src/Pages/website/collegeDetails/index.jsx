import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { getImageURL } from "../../../utils/utils-image";
import Relatedcolleges from "../college/relatedcolleges";
import Relatednews from "../college/relatednews";
import Login from "../commonComps/login";
import Modal from "../commonComps/modal";

import arrowTilt from "/images/arrow-tilt.svg";
import downlaod from "/images/downloads.svg";
import mapIcon from "/images/map-icon.png";
import compare from "/images/compare.svg";
import adsImg from "/images/ads.svg";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [subcoursestypearr, setSubcoursestypearr] = useState([]);
  const [subcoursearr, setSubcoursearr] = useState([]);
  const { college_url } = useParams();

  useEffect(() => {
    const detailsUrl = location.pathname.split("+")[0];
    const detailsTabs = location.pathname.split("+")[1];
    setNameUrl(detailsUrl);
    setTabName(detailsTabs);
  }, [location.pathname]);

  const [displaycollegdetail, setDisplaycollegdetail] = useState({
    cid: "",
    college_name: "",
    college_description: "",
    courses: "",
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
    axios
      .get("/api/getsubcoursestypecollegearr")
      .then((response) => {
        setSubcoursestypearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/api/getsubcoursecollegearr")
      .then((response) => {
        setSubcoursearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [nameUrl]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        className="detailsBanner"
        style={{
          backgroundImage: `url('https://timesofcollege.com/images/Oxford-University.jpg')`,
        }}
      >
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
            <ul className="historyInfo">
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
            </ul>
            <div className="apply-link" onClick={() => openModal()}>
              <span>Apply</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
            <div className="action-btns">
              <div className="download">
                <img src={downlaod} alt="" />
                <span>Download Brochure</span>
              </div>
              <div className="compare">
                <img src={compare} alt="" />
                <span>Compare Colleges</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Tabs tabName={tabName} collageUrl={nameUrl} />

      <section className="container detailsWrapper">
        <div className="contentWrapper">
          {(tabName === "overview" || tabName == undefined) && (
            <CollegeOverview data={displaycollegdetail} courses={subcoursearr} openModal={openModal} />
          )}
          {tabName === "courses-and-fees" && (
            <CollegeCoursesFees data={displaycollegdetail} courses={subcoursearr} openModal={openModal} />
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
          {/* {displaycollegdetail.courses && (
            <Relatedcolleges data={displaycollegdetail} vtype="v" />
          )} */}
        </div>
        <div className="relatedWrapper">
          <div className="others">
            <ul className="phCards">
              <li>
                <p>
                  <h2 className="font-bold pb-1 text-2xl text-center">
                    Placement Highlights
                  </h2>
                </p>
              </li>
              <li>
                <p>
                  <b>{displaycollegdetail.totalplacementratio}</b>
                </p>
                <span>Total Placement Ratio</span>
              </li>
              <li>
                <p>
                  <b>{displaycollegdetail.averageplacementrecord}</b>
                </p>
                <span>Average Placement Record</span>
              </li>
              <li>
                <p>
                  <b>{displaycollegdetail.higestplacementrecord}</b>
                </p>
                <span>Higest Placement Record</span>
              </li>
              <li>
                <p>
                  <b>{displaycollegdetail.lowestplacementrecord}</b>
                </p>
                <span>Lowest Placement Record</span>
              </li>
            </ul>

            <hr style={{ color: "#32325d40", margin: "15px" }} />

            <ul className="phCards">
              <li>
                <p>
                  <h2 className="font-bold pb-1 text-2xl text-center">
                    Top Courses
                  </h2>
                </p>
              </li>
              <li>
                <p>
                  <b>{"B.Tech"}</b>
                </p>
              </li>
              <li>
                <p>
                  <b>{"BCA"}</b>
                </p>
              </li>
            </ul>

            <hr style={{ color: "#32325d40", margin: "15px" }} />

            {displaycollegdetail.courses && (
              <div className="relatedColg">
                <Relatedcolleges
                  data={displaycollegdetail}
                  heading={"Top Viewed Colleges"}
                  vtype="v"
                />
              </div>
            )}

            {/* <Login heading={"Let Us Help You"} /> */}

            <div className="ads">
              <img src={adsImg} alt="" />
            </div>
            <div className="ads">
              <img src={adsImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Modal isModalOpen={isModalOpen} onClose={closeModal} >
        <Login heading={"Get Notify !"} />
      </Modal>
    </>
  );
}

export default CollegeDetails;

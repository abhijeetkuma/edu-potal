import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { getImageURL } from "../../../utils/utils-image";
import Relatedcolleges from "../college/relatedcolleges";
import Relatednews from "../college/relatednews";
import GetHelp from "../commonComps/getNotify";
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
  const [popupEvents, setPopupEvents] = useState({cid: '', btnName: '', btnTitle: ''});
  const { college_url } = useParams();

  const [displaycollegdetail, setDisplaycollegdetail] = useState({
    cid: "",
    college_name: "",
    college_description: "",
    courses: "",
  });

  useEffect(()=>{
    const updatecollegeviews = (cid) => {
      axios({
        method: "post",
        url: "/api/updatecollegeviews",
        data: { cid: cid },
      });
    };

    displaycollegdetail && updatecollegeviews(displaycollegdetail.cid)

  },[displaycollegdetail])


  useEffect(() => {
    const detailsUrl = location.pathname.split("+")[0];
    const detailsTabs = location.pathname.split("+")[1];
    setNameUrl(detailsUrl);
    setTabName(detailsTabs);
  }, [location.pathname]);

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

  const openModal = (event) => {
    event.stopPropagation()
    const { name, title} = event.target.dataset;
    setPopupEvents({cid:  displaycollegdetail.cid, btnName: name, btnTitle: title})
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
          backgroundImage: `url(${getImageURL(displaycollegdetail.banner ? displaycollegdetail.banner : '')})`,
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
                  <span>
                    <b>
                      {displaycollegdetail.total_rating
                        ? displaycollegdetail.total_rating.slice(0, 3)
                        : "0"}
                    </b>{" "}
                    /10
                  </span>
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
            <div className="apply-link" data-name='Apply' data-title='Header Apply' onClick={(e) => openModal(e)}>
              <span>Apply</span>
              <span>
                <img src={arrowTilt} alt="" />
              </span>
            </div>
            <div className="action-btns">
              <div className="download" data-name='Download Brochure' data-title='Header Download Brochure' onClick={(e) => openModal(e)}>
                <img src={downlaod} alt="" />
                <span>Download Brochure</span>
              </div>
              <div className="compare" data-name='Compare Colleges' data-title='Header Compare Colleges' onClick={(e) => openModal(e)}>
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
            <CollegeOverview
              data={displaycollegdetail}
              courses={subcoursearr}
              openModal={openModal}
            />
          )}
          {tabName === "courses-and-fees" && (
            <CollegeCoursesFees
              data={displaycollegdetail}
              courses={subcoursearr}
              openModal={openModal}
            />
          )}
          {tabName === "admissions" && (
            <CollegeAdmissions
              data={displaycollegdetail}
              openModal={openModal}
            />
          )}
          {tabName === "placements" && (
            <CollegePlacements
              data={displaycollegdetail}
              openModal={openModal}
            />
          )}
          {tabName === "scholarships" && (
            <CollegeScholarships
              data={displaycollegdetail}
              openModal={openModal}
            />
          )}
          {tabName === "faculties" && (
            <CollegeFaculties
              data={displaycollegdetail}
              openModal={openModal}
            />
          )}
          {tabName === "gallery" && (
            <CollegeGallery data={displaycollegdetail} openModal={openModal} />
          )}
          {tabName === "reviews" && (
            <CollegeReviews data={displaycollegdetail} openModal={openModal} />
          )}
          {tabName === "news" && (
            <CollegeNews data={displaycollegdetail} openModal={openModal} />
          )}
          {tabName === "question-answer" && (
            <CollegeQuesAns data={displaycollegdetail} openModal={openModal} />
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
                  <h2 className="headingSeaGreen font-bold pb-1 text-2xl text-center mb-2">
                    Placement Highlights
                  </h2>
                </p>

                <div>
                  <p>
                    <b>{displaycollegdetail.totalplacementratio}</b>
                  </p>
                  <span>Total Placement Ratio</span>
                </div>

                <div>
                  <p>
                    <b>{displaycollegdetail.averageplacementrecord}</b>
                  </p>
                  <span>Average Placement Record</span>
                </div>

                <div>
                  <p>
                    <b>{displaycollegdetail.higestplacementrecord}</b>
                  </p>
                  <span>Higest Placement Record</span>
                </div>

                <div>
                  <div className="compare" onClick={openModal}>
                    {/* <img src="/images/compare.svg" alt="" /> */}
                    <img src="/images/downloads.svg" alt="" />
                    <span>Latest Placements</span>
                  </div>
                </div>
              </li>
            </ul>

            <hr style={{ color: "#32325d40", margin: "15px" }} />

            <ul className="phCards">
              <li>
                <p>
                  <h2 className="headingSeaGreen font-bold pb-1 text-2xl text-center mb-2">
                    Top Courses
                  </h2>
                </p>
                <div>
                  <p>
                    <b>{"B.Tech"}</b>
                  </p>
                </div>
                <div>
                  <p>
                    <b>{"BCA"}</b>
                  </p>
                </div>
              </li>
            </ul>

            <hr style={{ color: "#32325d40", margin: "15px" }} />

            <GetHelp
              heading={"Let Us Help You"}
              openModal={openModal}
              headingClass={"headingSeaGreen"}
            />

            {displaycollegdetail.courses && (
              <div className="relatedColg">
                <Relatedcolleges
                  data={displaycollegdetail}
                  heading={"Top Viewed Colleges"}
                  headingClass={"headingSeaGreen"}
                  vtype="v"
                />
              </div>
            )}

            <div className="ads">
              <img src={adsImg} alt="" />
            </div>
            <div className="ads">
              <img src={adsImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <Login heading={"Get Notify !"} data={popupEvents} />
      </Modal>
    </>
  );
}

export default CollegeDetails;

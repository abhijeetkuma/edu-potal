import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import adsImg from "/images/ads.svg";
import clgSmallImg from "/images/img-dummy-sm.png";
import GetHelp from "./commonComps/getNotify";
import Modal from "./commonComps/modal";
import Login from "./commonComps/login";

function Exams(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupEvents, setPopupEvents] = useState({
    cid: "",
    btnName: "",
    btnTitle: "",
  });
  const [displayexamlisting, setDisplayexamlisting] = useState({
    cms_description: "",
    cms_title: "",
  });
  //const { cms_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/examlisting/")
      .then((response) => {
        setDisplayexamlisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);

  const openModal = (event) => {
    event.stopPropagation();
    const { name, title } = event.target.dataset;
    setPopupEvents({ cid: "", btnName: name, btnTitle: title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderExams = (eitem) => (
    <a href={"/exam/" + eitem.na_url}>{eitem.na_title}</a>
  );

  //console.log(cms_url);
  return (
    <>
      <section className="container college-filter-wrapper exams-listing">
        <section className="college-list-wrapper exams-container">
          <div className="font-bold text-2xl pb-3 pt-3">Sitemap</div>
          <div className="sitemap-card-list">
            <ul>
              <li>
                <NavLink to={`/`}>
                  <b>Home</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/listing`}>
                  <b>Colleges</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/exams`}>
                  <b>Exams</b>
                </NavLink>
                {displayexamlisting.length > 0 &&
                  displayexamlisting.map((item, id) => (
                    <div>{renderExams(item)}</div>
                  ))}
              </li>
              <li>
                <NavLink to={`/courses`}>
                  <b>Courses</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/studygoal`}>
                  <b>Study Goal</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/toccafe`}>
                  <b>TOC Cafe</b>
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
        <div className="others">
          <GetHelp
            heading={"Let Us Help You"}
            openModal={openModal}
            headingClass={"headingSeaGreen"}
          />
          <div className="ads">
            <img src={adsImg} alt="" />
          </div>
          <div className="ads">
            <img src={adsImg} alt="" />
          </div>
        </div>
      </section>
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <Login heading={"Get Notify !"} data={popupEvents} />
      </Modal>
    </>
  );
}
Exams.propTypes = {};

export default Exams;

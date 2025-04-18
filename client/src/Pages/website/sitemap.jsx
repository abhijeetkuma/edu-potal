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
  const [displaycollegelisting, setDisplaycollegelisting] = useState({
    college_name: "",
    college_url: "",
  });
  const [displayexamlisting, setDisplayexamlisting] = useState({
    na_title: "",
    na_url: "",
  });
  const [displaycourselisting, setDisplaycourselisting] = useState({
    course_name: "",
    course_url: "",
  });
  const [displaysglisting, setDisplaysglisting] = useState({
    category_name: "",
    category_url: "",
  });
  //const { cms_url } = useParams();
  useEffect(() => {
    axios
      //.get("/api/cmsdetails/" + cms_url)
      .get("/api/collegelisting/", {
        params: {},
      })
      .then((response) => {
        setDisplaycollegelisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/api/examlisting/")
      .then((response) => {
        setDisplayexamlisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/api/courseslisting/")
      .then((response) => {
        setDisplaycourselisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/api/studygoallisting/")
      .then((response) => {
        setDisplaysglisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
  const adminssinyear = new Date();
  const renderColleges = (citem) => (
    <>
      {/* <a href={"/college/" + citem.college_url}>{citem.college_name}</a>
      <a href={"/college/" + citem.college_url}>{citem.college_url}</a>
      <a href={"/college/" + citem.college_url}>{citem.college_name}</a> */}
      <li>
        <a href={`/college/${citem.college_url}`}>{citem.college_name}</a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+courses-and-fees`}>
          {citem.college_name} Courses & Fees
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+admissions`}>
          {citem.college_name} Admission {adminssinyear.getFullYear()}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+placements`}>
          {citem.college_name} Placements {adminssinyear.getFullYear() - 1}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+scholarships`}>
          {citem.college_name} Scholarships
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+faculties`}>
          {citem.college_name} Faculties
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+gallery`}>
          {citem.college_name} Gallery
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+reviews`}>
          {citem.college_name} Reviews
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+news`}>
          {citem.college_name} News
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+question-answer`}>
          {citem.college_name} Q&A
        </a>
      </li>
      {/*
      <li>
        <a
          href={`/college/${citem.college_url}`}
        >{`https://timesofcollege.com/college/${citem.college_url}`}</a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+courses-and-fees`}>
          {`https://timesofcollege.com/college/${citem.college_url}+courses-and-fees`}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+admissions`}>
          {`https://timesofcollege.com/college/${citem.college_url}+admissions`}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+placements`}>
          {`https://timesofcollege.com/college/${citem.college_url}+placements`}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+scholarships`}>
          {`https://timesofcollege.com/college/${citem.college_url}+scholarships`}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+faculties`}>
          {`https://timesofcollege.com/college/${citem.college_url}+faculties`}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+gallery`}>
          {`https://timesofcollege.com/college/${citem.college_url}+gallery`}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+reviews`}>
          {`https://timesofcollege.com/college/${citem.college_url}+reviews`}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+news`}>
          {`https://timesofcollege.com/college/${citem.college_url}+news`}
        </a>
      </li>
      <li>
        <a href={`/college/${citem.college_url}+question-answer`}>
          {`https://timesofcollege.com/college/${citem.college_url}+question-answer`}
        </a>
      </li> */}
    </>
  );
  const renderExams = (eitem) => (
    <a href={"/exam/" + eitem.na_url}>{eitem.na_title}</a>
  );
  const renderCourse = (citem) => (
    <a href={"/course/" + citem.course_url}>{citem.course_name}</a>
  );
  const renderStudygoal = (sgitem) => (
    <a href={"/categorywise/" + sgitem.category_url}>{sgitem.category_name}</a>
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

                <div className="sitemapinnerlink">
                  {displaycollegelisting.length > 0 &&
                    displaycollegelisting.map((item, id) => (
                      <div>{renderColleges(item)}</div>
                    ))}
                </div>
              </li>
              <li>
                <NavLink to={`/exams`}>
                  <b>Exams</b>
                </NavLink>
                <div className="sitemapinnerlink">
                  {displayexamlisting.length > 0 &&
                    displayexamlisting.map((item, id) => (
                      <div>{renderExams(item)}</div>
                    ))}
                </div>
              </li>
              <li>
                <NavLink to={`/courses`}>
                  <b>Courses</b>
                </NavLink>
                <div className="sitemapinnerlink">
                  {displaycourselisting.length > 0 &&
                    displaycourselisting.map((item, id) => (
                      <div>{renderCourse(item)}</div>
                    ))}
                </div>
              </li>
              <li>
                <NavLink to={`/studygoal`}>
                  <b>Study Goal</b>
                </NavLink>
                <div className="sitemapinnerlink">
                  {displaysglisting.length > 0 &&
                    displaysglisting.map((item, id) => (
                      <div>{renderStudygoal(item)}</div>
                    ))}
                </div>
              </li>
              <li>
                <NavLink to={`/toccafe`}>
                  <b>TOC Cafe</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/cms/about-us`}>
                  <b>About Us</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/cms/contact-us`}>
                  <b>Contact Us</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/cms/help`}>
                  <b>Help</b>
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={`/`}>
                  <b>Careers</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/cms/privacy-policy`}>
                  <b>Privacy Policy</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/cms/terms-conditions`}>
                  <b>Terms & Conditions</b>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/sitemap`}>
                  <b>Sitemap</b>
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

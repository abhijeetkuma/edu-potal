import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import adsImg from "/images/ads.svg";
import clgSmallImg from "/images/img-dummy-sm.png";

function Exams(props) {
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

  const renderExams = (eitem) => (
    <a href={"/exam/" + eitem.na_url}>
      <div className="exam-card" id={eitem.na_id}>
        <div className="exam-meta">
          <img src={clgSmallImg} alt="" />
          <div>
            <h3>{eitem.na_title}</h3>
            <span>online</span>
          </div>
        </div>
        <div className="exam-info-list">
          <div className="exam-info">
            <span>Exam Level</span>
            <span>National</span>
          </div>
          <div className="exam-info">
            <span>Exam Date</span>
            <span>12-May-2024</span>
          </div>
        </div>
        <hr className="hr-x" />
        <div className="exam-link">
          <span className="link">Registration Process</span>
          <span className="link">Exam Information</span>
        </div>
      </div>
    </a>
  );

  //console.log(cms_url);
  return (
    <>
      <section className="container college-filter-wrapper exams-listing">
        <section className="college-list-wrapper exams-container">
          <div className="font-bold text-2xl pb-3 pt-3">Exams</div>
          <div className="exam-card-list">
            {displayexamlisting.length > 0 &&
              displayexamlisting.map((item, id) => (
                // <a href={"exams/details/" + item.na_url}>
                //   <div className="md:box-content p-4 border-2 m-px  ">
                //     {item.na_title}
                //   </div>
                // </a>
                <div>{renderExams(item)}</div>
              ))}
          </div>
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
Exams.propTypes = {};

export default Exams;

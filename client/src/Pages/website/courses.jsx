import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import adsImg from "/images/ads.svg";
import clgSmallImg from "/images/img-dummy-sm.png";

function Couseses(props) {
  const [displayexamlisting, setDisplayexamlisting] = useState({
    cms_description: "",
    cms_title: "",
  });
  //const { cms_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/courseslisting/")
      .then((response) => {
        setDisplayexamlisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);

  const renderCourses = (eitem) => (
    <div className="exam-card">
      <div className="exam-meta">
        <div>
          <h3>{eitem.course_name}</h3>
        </div>
      </div>
    </div>
  );

  //console.log(cms_url);
  return (
    <>
      <section className="container college-filter-wrapper exams-listing">
        <section className="college-list-wrapper exams-container">
          <div className="font-bold text-2xl pb-3 pt-3">Courses</div>
          <div className="exam-card-list">
            {displayexamlisting.length > 0 &&
              displayexamlisting.map((item, id) => (
                // <a href={"exams/details/" + item.na_url}>
                //   <div className="md:box-content p-4 border-2 m-px  ">
                //     {item.na_title}
                //   </div>
                // </a>
                <div>{renderCourses(item)}</div>
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
Couseses.propTypes = {};

export default Couseses;

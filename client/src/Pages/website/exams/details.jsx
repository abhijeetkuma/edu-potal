import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import adsImg from "/images/ads.svg";
import clgSmallImg from "/images/img-dummy-sm.png";

function Examdetails(props) {
  const [displayexamdetail, setDisplayexamdetail] = useState({
    cms_description: "",
    cms_title: "",
  });
  const { na_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/examdetail/" + na_url)
      .then((response) => {
        setDisplayexamdetail(response.data[0]);
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
            {displayexamdetail.na_title}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: displayexamdetail.na_description,
            }}
          ></div>
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
Examdetails.propTypes = {};

export default Examdetails;

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
          <div className="font-bold pt-2 newstitle">
            {displayexamdetail.na_title}
            {displayexamdetail.disp_date && (
              <date>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                {displayexamdetail.disp_date}
              </date>
            )}
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

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import PropTypes from "prop-types";
import adsImg from "/images/ads.svg";

function Cms(props) {
  const [displaycontant, setDisplaycontant] = useState({
    cms_description: "",
    cms_title: "",
  });
  const { cms_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/cmsdetails/" + cms_url)
      .then((response) => {
        setDisplaycontant(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);
  useEffect(() => {
    axios
      .get("/api/cmsdetails/" + cms_url)
      .then((response) => {
        setDisplaycontant(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, [cms_url]);
  //console.log(cms_url);
  return (
    <>
      <Helmet>
        <title>{displaycontant.cms_meta_title}</title>
        <meta
          name="description"
          content={displaycontant.cms_meta_description}
        />
        <meta name="keywords" content={displaycontant.cms_meta_keyword} />
      </Helmet>
      <section className="container college-filter-wrapper">
        <section className="college-list-wrapper">
          <div className="font-bold pt-2 cmstitle">
            {displaycontant.cms_title}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: displaycontant.cms_description }}
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
Cms.propTypes = {};

export default Cms;

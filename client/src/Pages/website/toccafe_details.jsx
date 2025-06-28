import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import axios from "axios";

import adsImg1 from "/images/ads/ads1.gif";
import adsImg2 from "/images/ads/ads2.gif";
import clgSmallImg from "/images/img-dummy-sm.png";

function Toccafedetails(props) {
  const [displaytoclisting, setDisplaytoclisting] = useState({
    question: "",
    answer: "",
    qmeta_description: "",
    qmeta_keyword: "",
    qmeta_title: "",
  });
  const { question_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/toccafedetail/" + question_url)
      .then((response) => {
        setDisplaytoclisting(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);

  const renderToc = (eitem) => (
    <div className="tocdetails">
      <div>
        <h3>{eitem.question}</h3>
        <span dangerouslySetInnerHTML={{ __html: eitem.answer }}></span>
      </div>
    </div>
  );

  //console.log(cms_url);
  console.log("displaytoclisting", displaytoclisting);
  return (
    <>
      <Helmet>
        <title>{displaytoclisting.qmeta_title}</title>
        <meta
          name="description"
          content={displaytoclisting.qmeta_description}
        />
        <meta name="keywords" content={displaytoclisting.qmeta_keyword} />
        <link
          id="canonicalUrl"
          rel="canonical"
          href={`https://timesofcollege.com/toccafe/${displaytoclisting.question_url}`}
        />
        <meta property="og:site_name" content="Times of College"></meta>
        <meta
          property="og:url"
          content={`https://timesofcollege.com/toccafe/${displaytoclisting.question_url}`}
        />
        <meta property="og:type" content="toccafe-view" />
        <meta
          property="og:title"
          key="og:title"
          content={displaytoclisting.qmeta_title}
        />
        =
        <meta
          property="og:description"
          key="og:description"
          content={displaytoclisting.qmeta_description}
        />
        <meta
          property="og:image"
          key="og:image"
          content={`https://timesofcollege.com/images/logoWhite.png`}
        />
      </Helmet>
      <section className="container college-filter-wrapper exams-listing">
        <section className="college-list-wrapper exams-container">
          <div className="toclist">
            <div>{renderToc(displaytoclisting)}</div>
          </div>
        </section>
        <div className="others">
          <div className="ads">
            <a href="https://timesofcollege.com/college/jaipuria-school-of-business-ghaziabad">
              <img src={adsImg1} alt="JAIPURIA" />
            </a>
          </div>
          <div className="ads">
            <a href="https://timesofcollege.com/college/bimtech-greater-noida">
              <img src={adsImg2} alt="BIMTECH" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
Toccafedetails.propTypes = {};

export default Toccafedetails;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import adsImg from "/images/ads.svg";
import clgSmallImg from "/images/img-dummy-sm.png";

function Toccafe(props) {
  const [displaytoclisting, setDisplaytoclisting] = useState({
    question: "",
    answer: "",
  });
  //const { cms_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/toccafelisting/")
      .then((response) => {
        setDisplaytoclisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);

  const renderToc = (eitem, key) => (
    <div className="tocdetails" key={key}>
      <div>
        <h3>{eitem.question}</h3>
        <span dangerouslySetInnerHTML={{ __html: eitem.answer }}></span>
      </div>
    </div>
  );

  //console.log(cms_url);
  return (
    <>
      <section className="container college-filter-wrapper exams-listing">
        <section className="college-list-wrapper exams-container">
          <div className="font-bold text-2xl pb-3 pt-3">Toc Cafe</div>
          <div className="toclist">
            {displaytoclisting.length > 0 &&
              displaytoclisting.map((item, id) => (
                <div>{renderToc(item, id)}</div>
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
Toccafe.propTypes = {};

export default Toccafe;

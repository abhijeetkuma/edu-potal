import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

import adsImg1 from "/images/ads/ads1.gif";
import adsImg2 from "/images/ads/ads2.gif";
import clgSmallImg from "/images/img-dummy-sm.png";
import Accordion from "./commonComps/accordion";

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
            {/* <div>{renderToc(item, id)}</div> */}

            {displaytoclisting.length > 0 &&
              displaytoclisting.map((item, id) => (
                <Accordion
                  title={item.question}
                  content={item.answer}
                  url={item.question_url}
                />
              ))}
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
Toccafe.propTypes = {};

export default Toccafe;

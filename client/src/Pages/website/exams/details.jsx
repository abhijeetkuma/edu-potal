import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import PropTypes from "prop-types";
import adsImg from "/images/ads.svg";
import clgSmallImg from "/images/img-dummy-sm.png";
import adsImg1 from "/images/ads/ads1.gif";
import adsImg2 from "/images/ads/ads2.gif";
import Relatedcolleges from "../college/relatedcolleges";
import Modal from "../commonComps/modal";
import Login from "../commonComps/login";

function Examdetails(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupEvents, setPopupEvents] = useState({
    cid: "",
    btnName: "",
    btnTitle: "",
  });

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

  const openModal = (event) => {
    event.stopPropagation();
    const { name, title } = event.target.dataset;
    setPopupEvents({
      cid: "",
      btnName: name,
      btnTitle: title,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>{displayexamdetail.na_metatitle}</title>
        <meta
          name="description"
          content={displayexamdetail.na_metadescription}
        />
        <meta name="keywords" content={displayexamdetail.na_metakeyword} />
        <link
          id="canonicalUrl"
          rel="canonical"
          href={`https://timesofcollege.com/exam/${displayexamdetail.na_url}`}
        />
        <meta property="og:site_name" content="Times of College"></meta>
        <meta
          property="og:url"
          content={`https://timesofcollege.com/college/${displayexamdetail.na_url}`}
        />
        <meta property="og:type" content="college-view" />
        <meta
          property="og:title"
          key="og:title"
          content={displayexamdetail.na_metatitle}
        />
        =
        <meta
          property="og:description"
          key="og:description"
          content={displayexamdetail.na_metadescription}
        />
        <meta
          property="og:image"
          key="og:image"
          content={`https://timesofcollege.com/images/logoWhite.png`}
        />
      </Helmet>
      <section className="container college-filter-wrapper">
        <section className="college-list-wrapper">
          <div className="font-bold pt-2 newstitle">
            {displayexamdetail.na_title}
            <div className="flex">
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
              {displayexamdetail.na_postedby &&
                <span style={{fontSize: 14, color: '#393555', marginLeft: 10}}>{`${displayexamdetail.na_type === "a" ? 'Author: ' : 'Posted By: '} ${displayexamdetail.na_postedby}`}</span>
              // : <span>{'Posted By: ' }</span>
              }
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: displayexamdetail.na_description,
            }}
          ></div>
          {displayexamdetail.na_type === "e" && (
            <div className="mt-5 mb-5 alignCenter">
              <button className="tocBtn bg-purple" onClick={openModal}>
                Start Test
              </button>
              <button className="tocBtn bg-orange" onClick={openModal}>
                Sample Questions
              </button>
            </div>
          )}
          {displayexamdetail.na_type === "n" && (
            <div className="mt-5 mb-5 alignCenter">
              <button className="tocBtn bg-purple" onClick={openModal}>
                College Predictor
              </button>
              <button className="tocBtn bg-orange" onClick={openModal}>
                Need a Guidance             
              </button>
            </div>
          )}
        </section>

        <div className="relatedWrapper">
          <div className="others examRightSide">
            {displayexamdetail && (
              <div className="relatedColg">
                <Relatedcolleges
                  data={24}
                  heading={"Top Viewed Colleges"}
                  headingClass={"headingSeaGreen"}
                  vtype="v"
                />
              </div>
            )}

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
        </div>

        <Modal isModalOpen={isModalOpen} onClose={closeModal}>
          <Login heading={"Get Notify !"} data={popupEvents} />
        </Modal>
      </section>
    </>
  );
}
Examdetails.propTypes = {};

export default Examdetails;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

// import Relatednews from "../../../src/Pages/website/college/relatednews";
// import Relatedcolleges from "./college/relatedcolleges";

import adsImg1 from "/images/ads/ads1.gif";
import adsImg2 from "/images/ads/ads2.gif";
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
  const [displayexamlisting, setDisplayexamlisting] = useState({
    cms_description: "",
    cms_title: "",
  });
  //const { cms_url } = useParams();
  const [displaycollegdetail, setDisplaycollegdetail] = useState({
    college_description: "",
  });

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
    // axios
    //   .get("/api/collegedetail/" + college_url.split("+")[0])
    //   .then((response) => {
    //     setDisplaycollegdetail(response.data[0]);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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
            <span>{eitem.disp_date}</span>
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
          <GetHelp
            heading={"Let Us Help You"}
            openModal={openModal}
            headingClass={"headingSeaGreen"}
          />

          {/* {displaycollegdetail.courses && (
            <div className="relatedColg">
              <Relatedcolleges
                data={displaycollegdetail}
                heading={"Top Viewed Colleges"}
                headingClass={"headingSeaGreen"}
                vtype="v"
              />
            </div>
          )} */}

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

      {/* <section className="news  mt-10">
        {props.data.courses && (
          <Relatednews
            data={props.data}
            heading={"Related News and Events"}
            vtype="h"
          />
        )}
        <Link className="viewAll-btn" to={""}>
          View All News and Events
        </Link>
      </section> */}

      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <Login heading={"Get Notify !"} data={popupEvents} />
      </Modal>
    </>
  );
}
Exams.propTypes = {};

export default Exams;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import adsImg1 from "/images/ads/ads1.gif";
import adsImg2 from "/images/ads/ads2.gif";
import clgSmallImg from "/images/img-dummy-sm.png";
import arrowTilt from "/images/arrow-tilt.svg";
import GetHelp from "./commonComps/getNotify";
import Modal from "./commonComps/modal";
import Login from "./commonComps/login";

function Studygoal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupEvents, setPopupEvents] = useState({
    cid: "",
    btnName: "",
    btnTitle: "",
  });
  const [dispsglisting, setDispsglisting] = useState({
    cms_description: "",
    cms_title: "",
  });
  //const { cms_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/studygoallisting/")
      .then((response) => {
        setDispsglisting(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
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

  const renderSG = (eitem) => (
    <Link to={`/categorywise/${eitem.category_url}`}>
      <div className="chips-link">
        <span>{eitem.category_name}</span>
        <span>
          <img src={arrowTilt} alt="" />
        </span>
      </div>
    </Link>
  );

  //console.log(cms_url);
  return (
    <>
      <section className="container college-filter-wrapper exams-listing">
        <section className="college-list-wrapper exams-container">
          <div className="font-bold text-2xl pb-3 pt-3">Study Goal</div>
          <div className="exam-card-list">
            {dispsglisting.length > 0 &&
              dispsglisting.map((item, id) => (
                // <a href={"exams/details/" + item.na_url}>
                //   <div className="md:box-content p-4 border-2 m-px  ">
                //     {item.na_title}
                //   </div>
                // </a>
                <div>{renderSG(item)}</div>
              ))}
          </div>
        </section>
        <div className="others">
          <GetHelp
            heading={"Let Us Help You"}
            openModal={openModal}
            headingClass={"headingSeaGreen"}
          />
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
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <Login heading={"Get Notify !"} data={popupEvents} />
      </Modal>
    </>
  );
}
Studygoal.propTypes = {};

export default Studygoal;

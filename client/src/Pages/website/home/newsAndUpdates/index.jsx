import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";


function NewsAndUpdates({}) {
var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
    };

const [newsupdates, setNewsupdates] = useState({
    na_id: "",
    na_image: "",
    na_url: "",
    na_title: "",
    });

useEffect(() => {
    axios
      .get("/api/landingnewsandupdates/")
      .then((response) => {
        setNewsupdates(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
}, [])

const renderNewsAndUpdates = (nuitem) => (
    <a href={"exams/details/" + nuitem.na_url}>
    <div className="news-card">
        <div className="heading">
        <h3>{nuitem.na_title}</h3>
        </div>
        <div className="date">20-Jan-2024</div>
        <p className="details">
        CUET PG 2023 Pottery and Ceramics Question Paper with
        Answer Key PDF in Hindi is available for download here.
        The exam was conducted by National Te...
        </p>
        <hr className="hr-x" />
        <span className="link">Continue Reading...</span>
    </div>
    </a>
)

return (
<section className="container news-updates">
    <div className="head-line">Latest News & Updates </div>
        <div className="news-updates-container">
        <ul className="tabs">
            <li className="active">Admission</li>
            <li>Exam</li>
            <li>College</li>
        </ul>
        <div className="news-card-list">
        <Slider {...settings}>
            {newsupdates.length > 0 &&
            newsupdates.map((nuitem) => (
                <div>
                    {renderNewsAndUpdates(nuitem)}
                </div>
            ))}
        </Slider>
        </div>
        </div>
    </section>
    
    )
}

export default NewsAndUpdates;
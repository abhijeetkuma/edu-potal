import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

function Citywise({ imglite }) {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };

  const [bycity, setBycity] = useState({
    cit_id: "",
    city_name: "",
    city_url: "",
  });

  useEffect(() => {
    axios
      .get("/api/studybycities/")
      .then((response) => {
        setBycity(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderCity = (citem) => (
    <div className="city-card" id={citem.cit_id}>
      <div>
        <a href={"studybycity/" + citem.city_url}>
          <img src={imglite} alt="" />
          <p>{citem.city_name}</p>
        </a>
      </div>
    </div>
  );

  return (
    <section className="by-cities">
      <div className="container">
        <div className="head-line">Study by Cities</div>
        <div className="by-cities-list">
          <Slider {...settings}>
            {bycity.length > 0 &&
              bycity.map((citem) => <div>{renderCity(citem)}</div>)}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Citywise;

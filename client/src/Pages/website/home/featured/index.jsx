import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { getImageURL } from "../../../../utils/utils-image";

function Featured({ clgSmallImg, mapIcon }) {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const [fcollege, setFcollege] = useState({
    cid: "",
    college_name: "",
    higestplacementrecord: "",
    college_url: "",
    logo: "",
    city_name: "",
    averageplacementrecord: "",
  });
  useEffect(() => {
    axios
      .get("/api/featuredcolleges/")
      .then((response) => {
        setFcollege(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Slider {...settings}>
      {fcollege.length > 0 &&
        fcollege.map((item, index) => (
          <div id={item.cid}>
            <div className="featured-card">
              <div className="details">
                <div className="img-box">
                  <img src={getImageURL(item.logo)} alt={item.college_name} />
                </div>
                <div className="info">
                  <p>{item.college_name}</p>
                  <div>
                    <span className="location">
                      <img src={mapIcon} alt="" />
                      <span>{item.city_name}</span>
                    </span>
                    <span className="view-more">
                      <a href={"college/" + item.college_url}>View More</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="other-info">
                Avg. Package {item.averageplacementrecord}, India Rank 10th
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
}

Featured.propTypes = {};

export default Featured;

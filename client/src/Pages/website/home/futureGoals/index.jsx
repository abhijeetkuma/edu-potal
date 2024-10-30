import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
//import { getImageURL } from "../../../../utils/utils-image";

function FutureGoals({}) {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const [goal, setGoal] = useState({
    cat_id: "",
    category_name: "",
    category_url: "",
    courses: "",
  });
  useEffect(() => {
    axios
      .get("/api/futuregoal/")
      .then((response) => {
        setGoal(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Slider {...settings}>
      {goal.length > 0 &&
        goal.map((item, index) => (
          <div id={item.cat_id}>
            {console.log("courses", item.courses)}
            <div className="course-type">
              <div className="info">
                <h1>{item.category_name}</h1>
                <span>{item.total_colleges} Collages</span>
              </div>
              <ul>
                {item.courses &&
                  item.courses.split(",").map((c, i) => i <= 2 && <li>{c}</li>)}
              </ul>
              <div className="link">
                <a href={"categorywise/" + item.category_url}>
                  Find By Location
                </a>
                <a href={"categorywise/" + item.category_url}>Top Collages</a>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
}

FutureGoals.propTypes = {};

export default FutureGoals;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getImageURL } from "../../../utils/utils-image";
import mapIcon from "/images/map-icon.png";

function Relatedcolleges(props) {
  const {
    data: { courses },
    vtype,
  } = props;

  const [dispcolleges, setDispcolleges] = useState({
    cid: "",
    college_name: "",
    college_url: "",
    logo: "",
    banner: "",
  });

  //const { cms_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/relatedcollges/" + courses)
      .then((response) => {
        setDispcolleges(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);
  return (
    <div className="related-colleges">
      <h2 className="font-bold pb-1">Related Colleges</h2>
      {dispcolleges.length > 0 &&
        dispcolleges.map((item, id) => (
          <div id={item.cid}>
            <div className="related-colleges-box">
              <div className="details">
                <div className="img-box">
                  <img src={getImageURL(item.logo)} alt="" />
                </div>
                <div className="info">
                  <p>{item.college_name}</p>
                  <div>
                    <span className="location">
                      <img src={mapIcon} alt="" />
                      <span>{item.city_name}</span>
                    </span>
                    <span className="view-more">
                      <a href={"./" + item.college_url}>View More</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Relatedcolleges;

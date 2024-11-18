import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getImageURL } from "../../../utils/utils-image";

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
    console.log("courses---", props.data);
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
      <h2>Related Colleges</h2>
      {dispcolleges.length > 0 &&
        dispcolleges.map((item, id) => (
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
                      <img src="" alt="" />
                      <span>{item.city}</span>
                    </span>
                    <span className="view-more">
                      <a href={"college/" + item.college_url}>View More</a>
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

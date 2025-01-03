import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { getImageURL } from "../../../utils/utils-image";
import mapIcon from "/images/map-icon.png";

function Relatednews(props) {
  const {
    data: { courses },
    vtype,
  } = props;

  const [newslist, setNewslist] = useState({
    na_id: "",
    na_title: "",
    na_brief_description: "",
    na_url: "",
    na_image: "",
    na_date: "",
  });

  //const { cms_url } = useParams();
  useEffect(() => {
    axios
      .get("/api/relatednews/" + courses)
      .then((response) => {
        setNewslist(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
  }, []);
  return (
    <div className="related-colleges">
      <h2 className="font-bold pb-1">News / Articles</h2>
      {newslist.length > 0 &&
        newslist.map((item, id) => (
          <div id={item.cid} style={{ display: "flex", float: "left" }}>
            <div className="news-card">
              <div className="heading">
                <h3>{item.na_title}</h3>
              </div>
              <div className="date">{item.na_date}</div>
              <p className="details">
                {item.na_brief_description.substring(0, 200)}
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href={"../exam/" + item.na_url}>Continue Reading... </a>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Relatednews;

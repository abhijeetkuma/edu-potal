import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Listing from "../listing";

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
      <h1>Related Colleges</h1>
      {dispcolleges.length > 0 &&
        dispcolleges.map((item, id) => <div>{item.college_name}</div>)}
    </div>
  );
}
export default Relatedcolleges;

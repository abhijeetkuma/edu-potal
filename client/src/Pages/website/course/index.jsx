import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Listing from "../listing";
function Course() {
  const { course_url } = useParams();
  //console.log("useParams", useParams());
  return <Listing course_url={course_url} />;
}
export default Course;

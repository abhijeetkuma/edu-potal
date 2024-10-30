import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Listing from "./../listing";
function Studybycity() {
  const { city_url } = useParams();
  //console.log("useParams", useParams());
  return <Listing city_url={city_url} />;
}
export default Studybycity;

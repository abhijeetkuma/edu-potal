import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Listing from "./../listing";
function Categorywise() {
  const { category_url } = useParams();
  //console.log("useParams", useParams());
  return <Listing category_url={category_url} />;
}
export default Categorywise;

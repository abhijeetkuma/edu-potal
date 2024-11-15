import React, { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Listing from "../listing";
function Search() {
  //const { search_parameter } = useParams();
  //const { search_parameter } = useSearchParams();
  //console.log("useParams", search_parameter.get("keyword"));
  const [queryParameters] = useSearchParams();
  console.log("test->", queryParameters.get("keyword"));
  const search_parameter = queryParameters.get("keyword");
  return <Listing search_parameter={search_parameter} />;
}
export default Search;

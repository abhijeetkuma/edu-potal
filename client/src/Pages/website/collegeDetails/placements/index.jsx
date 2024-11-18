import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CollegePlacements(props) {
  const {
    college_name,
    college_descripton,
    courses_name,
    facultyprofile,
    placement_overview,
    totalplacementratio,
    averageplacementrecord,
    higestplacementrecord,
    lowestplacementrecord,
    toprecruiters,
    toprecuitingsectors,
    topprofile,
    facility_available,
    address,
    address2,
    city_name,
    state_name,
    pincode,
    email,
    contactno,
    website,
  } = props.data;

  return (
    <>
        <section>
          <div dangerouslySetInnerHTML={{__html: placement_overview}}></div>
            <ul>
                <li>
                <b>Total Placement Ratio :</b> {totalplacementratio}
                </li>
                <li>
                <b>Average Placement Record :</b>
                {averageplacementrecord}
                </li>
                <li>
                <b>Higest Placement Record :</b>
                {higestplacementrecord}
                </li>
                <li>
                <b>Lowest Placement Record :</b>
                {lowestplacementrecord}
                </li>
                <li>
                <b>Top Recruiters :</b> {toprecruiters}
                </li>
                <li>
                <b>Top Recruiting Sectors :</b>
                {toprecuitingsectors}
                </li>
                <li>
                <b>Top Profile :</b> {topprofile}
                </li>
            </ul>
        </section>
    </>
  );
}

export default CollegePlacements;

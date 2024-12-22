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
          <div className="placementHighlights">
             <ul className="phCards">
              <li>
                <p><b>{totalplacementratio}</b></p>
                <span>Total Placement Ratio</span>
              </li>
              <li>
                <p><b>{averageplacementrecord}</b></p>
                <span>Average Placement Record</span>
              </li>
              <li>
                <p><b>{higestplacementrecord}</b></p>
                <span>Higest Placement Record</span>
              </li>
              <li>
                <p><b>{lowestplacementrecord}</b></p>
                <span>Lowest Placement Record</span>
              </li>
             </ul>   

            <div className="topRecruiter">
              <span>
                <b>
                  Top Recruiters
                </b>
              </span>
              <ul className="chips">
                {toprecruiters?.split(',')?.map((item, i) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>  

            <div className="topRecruiter">
              <span>
                <b>
                  Top Recruiting Sectors
                </b>
              </span>
              <ul className="chips">
                {toprecuitingsectors?.split(',')?.map((item, i) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>

            <div className="topRecruiter">
              <span>
                <b>
                  Top Profile
                </b>
              </span>
              <ul className="chips">
                {topprofile?.split(',')?.map((item, i) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>  

          </div>

          <hr style={{color: '#ebe5ec', marginBottom: '20px'}}/>
          <div dangerouslySetInnerHTML={{__html: placement_overview}}></div>
        </section>
    </>
  );
}

export default CollegePlacements;

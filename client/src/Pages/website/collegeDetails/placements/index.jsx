import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Relatedcolleges from "../../college/relatedcolleges";
import Relatednews from "../../college/relatednews";
import Rating from "../../commonComps/ratings";
import Contact from "../../commonComps/contact";
import Facilities from "../../commonComps/facilities";

function CollegePlacements(props) {
  const {
    placement_overview,
    totalplacementratio,
    averageplacementrecord,
    higestplacementrecord,
    lowestplacementrecord,
    toprecruiters,
    toprecuitingsectors,
    topprofile,
    facilities
  } = props.data;

  const { openModal } = props;

  return (
    <>
      <section>
        <div className="placementHighlights">
          <ul className="phCards">
            <li>
              <p>
                <b>{totalplacementratio}</b>
              </p>
              <span>Total Placement Ratio</span>
            </li>
            <li>
              <p>
                <b>{averageplacementrecord}</b>
              </p>
              <span>Average Placement Record</span>
            </li>
            <li>
              <p>
                <b>{higestplacementrecord}</b>
              </p>
              <span>Highest Placement Record</span>
            </li>
            <li>
              <p>
                <b>{lowestplacementrecord}</b>
              </p>
              <span>Lowest Placement Record</span>
            </li>
          </ul>

          <div className="topRecruiter">
            <span>
              <b>Top Recruiters</b>
            </span>
            <ul className="chips">
              {toprecruiters?.split(",")?.map((item, i) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>

          <div className="topRecruiter">
            <span>
              <b>Top Recruiting Sectors</b>
            </span>
            <ul className="chips">
              {toprecuitingsectors?.split(",")?.map((item, i) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>

          <div className="topRecruiter">
            <span>
              <b>Top Profile</b>
            </span>
            <ul className="chips">
              {topprofile?.split(",")?.map((item, i) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <hr style={{ color: "#ebe5ec", marginBottom: "20px" }} />
        <div dangerouslySetInnerHTML={{ __html: placement_overview }}></div>
      </section>

      <Facilities data={facilities && facilities} />

      <section className="rating  mt-10">
        <h2 className="font-bold text-2xl mb-5">Rating</h2>
        <Rating data={props.data} />
      </section>

      <section className="address mt-10">
        <h2 className="font-bold text-2xl mb-5">Address/Contact</h2>
        <Contact data={props.data} modelOpen={openModal} />
      </section>

      <section className="RelatedNews">
        {props.data.courses && (
          <Relatedcolleges
            data={props.data}
            heading={"Related Colleges"}
            vtype="v"
          />
        )}
      </section>

      <section className="news  mt-10">
        {props.data.courses && (
          <Relatednews
            data={props.data}
            heading={"Related News and Events"}
            vtype="h"
          />
        )}
        <Link className="viewAll-btn" to={""}>
          View All News and Events
        </Link>
      </section>
    </>
  );
}

export default CollegePlacements;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import Relatedcolleges from "../../college/relatedcolleges";
import Rating from "../../commonComps/ratings";
import Contact from "../../commonComps/contact";

import sports from "../../../../../public/images/facility/sports.png";
import auditorium from "../../../../../public/images/facility/auditorium.png";
import bank from "../../../../../public/images/facility/bank.png";
import cafeteria from "../../../../../public/images/facility/cafeteria.png";
import classrooms from "../../../../../public/images/facility/classrooms.png";
import complab from "../../../../../public/images/facility/complab.png";
import gym from "../../../../../public/images/facility/gym.png";
import hostel from "../../../../../public/images/facility/hostel.png";
import laboratory from "../../../../../public/images/facility/laboratory.png";
import library from "../../../../../public/images/facility/library.png";
import medical from "../../../../../public/images/facility/medical.png";
import transport from "../../../../../public/images/facility/transport.png";
import wifi from "../../../../../public/images/facility/wifi.png";

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

  const {openModal} = props;

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

        <section className="facilities mt-10">
          <h2 className="font-bold text-2xl mb-5">Facilities</h2>
          <ul>
            <li>
              <img src={sports} style={{ width: "50px" }} />
              <span>Sports</span>
            </li>
            <li>
              <img src={hostel} style={{ width: "50px" }} />
              <span>Hostel</span>
            </li>
            <li>
              <img src={cafeteria} style={{ width: "50px" }} />
              <span>Cafeteria</span>
            </li>
            <li>
              <img src={library} style={{ width: "50px" }} />
              <span>Library</span>
            </li>
            <li>
              <img src={laboratory} style={{ width: "50px" }} />
              <span>Labs</span>
            </li>
            <li>
              <img src={gym} style={{ width: "50px" }} />
              <span>Gym</span>
            </li>
            <li>
              <img src={bank} style={{ width: "50px" }} />
              <span>Banks</span>
            </li>
            <li>
              <img src={complab} style={{ width: "50px" }} />
              <span>Computer Lab</span>
            </li>
            <li>
              <img src={cafeteria} style={{ width: "50px" }} />
              <span>Cafeteria</span>
            </li>
            <li>
              <img src={medical} style={{ width: "50px" }} />
              <span>Medical</span>
            </li>
            <li>
              <img src={transport} style={{ width: "50px" }} />
              <span>Transport</span>
            </li>
            <li>
              <img src={wifi} style={{ width: "50px" }} />
              <span>Wi Fi</span>
            </li>
          </ul>
        </section>

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
          <h2 className="font-bold text-2xl mb-5">Related News and Events</h2>
          <div className="news-wrapper mb-5">
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
            <div className="news-card">
              <div className="heading">
                <h3>Maha TET Admit Card 2024 Live Updates</h3>
              </div>
              <div className="date"></div>
              <p className="details">
                Maha TET admit card 2024 will be released today, October 28,
                2024. The Maha TET 2024 admit card will be available for
                download till November 10, 2024.
              </p>
              <hr className="hr-x" />
              <span className="link">
                <a href="exam/maha-tet-admit-card-2024-live-updates">
                  Continue Reading...{" "}
                </a>
              </span>
            </div>
          </div>
          <Link className="viewAll-btn" to={""}>
            View All News and Events
          </Link>
        </section>
    </>
  );
}

export default CollegePlacements;

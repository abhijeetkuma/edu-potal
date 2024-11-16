import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import adsImg from "/images/ads.svg";

function CollegeOverview(props) {
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
    } = props.data

    
    return(
        <>
            <section className="container college-filter-wrapper">
                <section className="college-list-wrapper">
                <div className="font-bold text-2xl pb-3 pt-3">
                    {college_name}
                </div>
                <div
                    dangerouslySetInnerHTML={{
                    __html: college_descripton,
                    }}
                ></div>
                <div className="font-bold text-2xl pb-3 pt-3">Courses</div>
                <p>{courses_name}</p>
                <div className="font-bold text-2xl pb-3 pt-3">Faculty Profile</div>
                <div
                    dangerouslySetInnerHTML={{
                    __html: facultyprofile,
                    }}
                ></div>
                <div className="font-bold text-2xl pb-3 pt-3">Placements</div>
                <div
                    dangerouslySetInnerHTML={{
                    __html: placement_overview,
                    }}
                ></div>

                <ul>
                    <li>
                    <b>Total Placement Ratio :</b>{" "}
                    {totalplacementratio}
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
                <div className="font-bold text-2xl pb-3 pt-3">Facility Avaible</div>
                <p>{facility_available}</p>
                <div className="font-bold text-2xl pb-3 pt-3">Address</div>
                <p>
                    {address} {address2}
                    {city_name}, {state_name}
                    {pincode}
                </p>
                <p>
                    {email && "Email: " + email}
                </p>
                <p>
                    {contactno &&
                    "Contact: " + contactno}
                </p>
                <p>
                    {website &&
                    "Website: " + website}
                </p>
                </section>
                <div className="others">
                <div className="ads">
                    <img src={adsImg} alt="" />
                </div>
                <div className="ads">
                    <img src={adsImg} alt="" />
                </div>
                </div>
            </section>
        </>
    )
}

export default CollegeOverview;

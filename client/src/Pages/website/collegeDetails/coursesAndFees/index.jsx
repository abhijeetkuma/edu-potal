import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CollegeCoursesFees(props) {
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
                <div className="font-bold text-2xl pb-3 pt-3">Courses</div>
                <p>{courses_name}</p>
                </section>
                {/* <div className="others">
                <div className="ads">
                    <img src={adsImg} alt="" />
                </div>
                <div className="ads">
                    <img src={adsImg} alt="" />
                </div>
                </div> */}
            </section>
        </>
    )
}

export default CollegeCoursesFees;
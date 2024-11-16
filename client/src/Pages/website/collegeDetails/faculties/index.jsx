import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CollegeFaculties(props) {
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
                <div className="font-bold text-2xl pb-3 pt-3">Faculty Profile</div>
                <div
                    dangerouslySetInnerHTML={{
                    __html: facultyprofile,
                    }}
                ></div>
            </section>
            </section> 
        </>
    )
}

export default CollegeFaculties;

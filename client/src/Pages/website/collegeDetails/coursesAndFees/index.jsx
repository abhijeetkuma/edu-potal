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
            <section>
                <p>{courses_name}</p>
            </section>
        </>
    )
}

export default CollegeCoursesFees;
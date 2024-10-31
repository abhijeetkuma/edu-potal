import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Details from '../college/details'

function CollegeDetails(props) {
    return(
        <>
            <div className="container detailsTab">
                <ul>
                    <li>
                        <Link to='#'>Overview</Link>
                    </li>
                    <li>
                        <Link to='#'>Courses & Fees</Link>
                    </li>
                    <li>
                        <Link to='#'>Admission 2024</Link>
                    </li>
                    <li>
                        <Link to='#'>Placements</Link>
                    </li>
                    <li>
                        <Link to='#'>Scholarships</Link>
                    </li>
                    <li>
                        <Link to='#'>Faculties</Link>
                    </li>
                    <li>
                        <Link to='#'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='#'>Reviews</Link>
                    </li>
                    <li>
                        <Link to='#'>News</Link>
                    </li>
                    <li>
                        <Link to='#'>Q&A</Link>
                    </li>
                </ul>
            </div>
            {/* <Details /> */}

        </>
    )
}
                              
export default CollegeDetails;

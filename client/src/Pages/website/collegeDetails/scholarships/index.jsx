import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CollegeScholarships(props) {
  return (
    <>
        <section>
            <div dangerouslySetInnerHTML={{ __html: props.data.scholarshipoffer}}></div>
        </section>
    </>
  );
}

export default CollegeScholarships;

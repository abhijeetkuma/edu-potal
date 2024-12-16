import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CollegeAdmissions(props) {
  return (
    <>
        <section className="admissions">
            <div
              dangerouslySetInnerHTML={{
                __html: props.data.adminssiondetails,
              }}
            ></div>
        </section>
    </>
  );
}

export default CollegeAdmissions;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CollegeAdmissions(props) {
  return (
    <>
      <section className="container college-filter-wrapper">
        <section className="college-list-wrapper">
          <div className="container detailsTab">
            <div
              dangerouslySetInnerHTML={{
                __html: props.data.adminssiondetails,
              }}
            ></div>
          </div>
        </section>
      </section>
    </>
  );
}

export default CollegeAdmissions;

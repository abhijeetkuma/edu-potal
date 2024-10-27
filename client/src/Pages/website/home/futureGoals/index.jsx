import React, { useState, useEffect } from "react";

function FutureGoals({}) {

    return(
        <div className="course-type">
        <div className="info">
          <h1>Engineering</h1>
          <span>6200 Collages</span>
        </div>
        <ul>
          <li>BE/B.Tech</li>
          <li>ME/M.Tech</li>
          <li>Polytechnic Courses</li>
        </ul>
        <div className="link">
          <a href="#">Find By Location</a>
          <a href="#">Top Collages</a>
        </div>
      </div>
    )
}

FutureGoals.propTypes = {};

export default FutureGoals;
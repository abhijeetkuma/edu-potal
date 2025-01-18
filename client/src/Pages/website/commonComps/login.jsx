import React, { useState, useEffect } from "react";
import groupImg from "/images/group.png";
import axios from "axios";

function Login(props) {
  const { heading, inlineStyle, data } = props;

  const formsubmit = (e) => {
    const payload = {
      fullname: fullname.value,
      email: email.value,
      contactno: contactno.value,
      city: city.value,
      coursename: coursename.value,
      college_id: data ? data.cid : "",
      event_name: data ? data.btnName : "",
      event_title: data ? data.btnTitle : ""
    };
    axios({
      method: "post",
      url: "/api/formenquery",
      data: payload,
    });
    return false;
  };
  return (
    <>
      <section className="container loginPage">
        <div className="login-left-container">
          <div className="head-line">{"Why should you join us ?"}</div>
          <ul>
            <li>
              <div>
                <span></span>
                <p>Shortlist & Apply</p>
              </div>
              <div>
                <span></span>
                <p>Check Fees</p>
              </div>
            </li>
            <li>
              <div>
                <span></span>
                <p>Brochures</p>
              </div>
              <div>
                <span></span>
                <p>24/7 Support</p>
              </div>
            </li>
            <li>
              <div>
                <span></span>
                <p>Deadlines</p>
              </div>
              <div>
                <span></span>
                <p>Scholarships</p>
              </div>
            </li>
          </ul>
          <img src={groupImg} alt="bgImage" />
        </div>
        <div className="login-right-container">
          <form
            action="post"
            name="loginpopupform"
            id="loginpopupform"
            //onSubmit={formsubmit}
          >
            <div className="head-line">
              Fill the details below. <br /> We are here to help you !
            </div>
            <div className="">
              <div className="form-element">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="text"
                  name="contactno"
                  id="contactno"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>
              <div className="form-element">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter Your City"
                  required
                />
              </div>
              <div className="form-element">
                <select name="coursename" id="coursename">
                  <option value="-Select-">Choose courses</option>
                  <option value="bca">BCA</option>
                </select>
              </div>
              <div className="agreed">
                <input type="checkbox" checked name="agree" id="agree" required />
                <label htmlFor="agree">
                  Yes, I have read and provide my consent for my information to
                  be processed for the purpose as mentioned in the{" "}
                  <a href="/cms/privacy-policy" className="underline">
                    Privacy
                  </a>
                  .
                </label>
              </div>

              <button type="button" onClick={(e) => formsubmit(e)}>
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;

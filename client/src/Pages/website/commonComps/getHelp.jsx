import React, { useState, useEffect } from "react";
import studentIcon from "/images/students-icon.svg";
import emailIcon from "/images/email-icon.svg";
import phoneIcon from "/images/phone-icon.svg";

function GetHelp(props) {
    const {heading, inlineStyle} = props;
    return(
        <>
            <section className="container get-help">
            <div className="head-line">{heading}</div>
            <form action="">
                <div className="get-help-container">
                <div className="form-element">
                    <span>
                    <img src={studentIcon} alt="" />
                    </span>
                    <input type="text" name="" id="" placeholder="Enter your Name" />
                </div>
                <div className="form-element">
                    <span>
                    <img src={emailIcon} alt="" />
                    </span>
                    <input type="text" name="" id="" placeholder="Enter your email" />
                </div>
                <div className="form-element">
                    <span>
                    <img src={phoneIcon} alt="" />
                    </span>
                    <input type="text" name="" id="" placeholder="Enter your phone" />
                </div>
                <div className="form-element">
                    <span>
                    <img src={studentIcon} alt="" />
                    </span>
                    <select name="course-list" id="">
                    <option value="-Select-">Choose courses</option>
                    <option value="option">Option</option>
                    </select>
                </div>
                <button type="button">Submit</button>
                </div>
            </form>
            </section>
        </>
    )
}

export default GetHelp;



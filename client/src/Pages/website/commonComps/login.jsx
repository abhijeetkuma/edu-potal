import React, { useState, useEffect } from "react";
import groupImg from "/images/group.png";

function Login(props) {
    const {heading, inlineStyle} = props;
    return(
        <>
            <section className="container loginPage">
                <div className="login-left-container">
                    <div className="head-line">{'Why should you join us ?'}</div>
                    <ul>
                        <li>
                            <div>
                                <span>
                                </span>
                                <p>Shortlist &  Apply</p>
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
                    <form action="">
                        <div className="head-line">Fill the details below. <br /> We are here to help you !</div>
                        <div className="">
                        <div className="form-element">
                            <input type="text" name="" id="" placeholder="Enter Your Name" />
                        </div>
                        <div className="form-element">
                            <input type="email" name="" id="" placeholder="Enter Your Email" />
                        </div>
                        <div className="form-element">
                            <input type="text" name="" id="" placeholder="Enter Your Phone" />
                        </div>
                        <div className="form-element">
                            <input type="text" name="" id="" placeholder="Enter Your City" />
                        </div>
                        <div className="form-element">
                            <select name="course-list" id="">
                                <option value="-Select-">Choose courses</option>
                                <option value="option">Option</option>
                            </select>
                        </div>
                        <div className="agreed">
                            <input type="checkbox" name="agree" id="agree" /> 
                            <label htmlFor="agree">Yes, I have read and provide my consent for my information to be processed for the purpose as mentioned in the Privacy.</label>
                        </div>

                        <button type="button">Apply Now</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login;



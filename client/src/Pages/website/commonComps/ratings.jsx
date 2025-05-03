import React from "react";
import star from "/images/star.png";

const Rating = (props) => {
 const {
    ratingacademic,
    rattingaccommodation,
    rattingfaculty,
    rattinginfrastructure,
    rattingplacements,
    rattingsocial,
    rattingthroughout
    } = props.data;
 return (
   <section className="rating-wrapper">
      <ul>
        <li className="shadow-md">
            <span><b>Academic</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{ratingacademic ? ratingacademic : '0'}</b>/10</span>
            </span>
        </li>
        <li className="shadow-md">
            <span><b>Accommodation</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattingaccommodation ? rattingaccommodation : '0'}</b>/10</span>
            </span>
        </li>
        <li className="shadow-md">
            <span><b>Faculty</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattingfaculty ? rattingfaculty : '0'}</b>/10</span>
            </span>
        </li>
        <li className="shadow-md">
            <span><b>Infrastructure</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattinginfrastructure ? rattinginfrastructure : '0'}</b>/10</span>
            </span>
        </li>
        <li className="shadow-md">
            <span><b>Placements</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattingplacements ? rattingplacements : '0'}</b>/10</span>
            </span>
        </li>
        <li className="shadow-md">
            <span><b>Social</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattingsocial ? rattingsocial : '0'}</b>/10</span>
            </span>
        </li>
        <li className="shadow-md">
            <span><b>Throughout</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattingthroughout ? rattingthroughout : '0'}</b>/10</span>
            </span>
        </li>
      </ul>  
   </section>
 );
};

export default Rating;
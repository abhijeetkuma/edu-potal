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
        <li>
            <span><b>Academic Rating</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{ratingacademic ? ratingacademic : '0'}</b>/10</span>
            </span>
        </li>
        <li>
            <span><b>Accommodation Rating</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattingaccommodation ? rattingaccommodation : '0'}</b>/10</span>
            </span>
        </li>
        <li>
            <span><b>Faculty Rating</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattingfaculty ? rattingfaculty : '0'}</b>/10</span>
            </span>
        </li>
        <li>
            <span><b>Infrastructure Rating</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattinginfrastructure ? rattinginfrastructure : '0'}</b>/10</span>
            </span>
        </li>
        <li>
            <span><b>Placements Rating</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattingplacements ? rattingplacements : '0'}</b>/10</span>
            </span>
        </li>
        <li>
            <span><b>Social Rating</b></span>
            <span className="clg-rating">
                <img src={star} alt="" />
                <span><b>{rattingsocial ? rattingsocial : '0'}</b>/10</span>
            </span>
        </li>
        <li>
            <span><b>Throughout Rating</b></span>
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
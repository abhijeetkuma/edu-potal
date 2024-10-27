import React, { useState, useEffect } from "react";

function Featured({clgSmallImg, mapIcon}) {

    return(
        <div className="featured-card">
            <div className="details">
                <div className="img-box">
                    <img src={clgSmallImg} alt="" />
                </div>
                <div className="info">
                    <p>
                    Swami Vivekananda Institute of Management and Computer Sc1...
                    </p>
                    <div>
                    <span className="location">
                        <img src={mapIcon} alt="" />
                        <span>Kolkata</span>
                    </span>
                    <span className="view-more">View More</span>
                    </div>
                </div>
            </div>
            <div className="other-info">Avg. Package 15L, India Rank 10th</div>
        </div>
    )
}

Featured.propTypes = {};

export default Featured;
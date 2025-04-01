import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Relatedcolleges from "../../college/relatedcolleges";
import Relatednews from "../../college/relatednews";
import Rating from "../../commonComps/ratings";
import Contact from "../../commonComps/contact";
import Facilities from "../../commonComps/facilities";
import { getImageURL } from "../../../../utils/utils-image";

function CollegeScholarships(props) {
  const {
    openModal,
    data: {
      college_name,
      facilities,
      meta_title,
      meta_description,
      meta_keyword,
      college_url,
      logo,
    },
  } = props;

  return (
    <>
      <Helmet>
        <title>{`Scholarships ${meta_title}`}</title>
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keyword} />
        <link
          id="canonicalUrl"
          rel="canonical"
          href={`https://timesofcollege.com/college/${college_url}+scholarships`}
        />
        <meta property="og:site_name" content="Times of College"></meta>
        <meta
          property="og:url"
          content={`https://timesofcollege.com/college/${college_url}+scholarships`}
        />
        <meta property="og:type" content="college-view" />
        <meta property="og:title" key="og:title" content={meta_title} />=
        <meta
          property="og:description"
          key="og:description"
          content={meta_description}
        />
        <meta property="og:image" key="og:image" content={getImageURL(logo)} />
      </Helmet>
      <section>
        <h2 className="font-bold text-2xl mb-5">
          {`${college_name} Scholarships`}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.scholarshipoffer }}
        ></div>
      </section>

      <Facilities data={facilities && facilities} />

      <section className="rating  mt-10">
        <h2 className="font-bold text-2xl mb-5">Rating</h2>
        <Rating data={props.data} />
      </section>

      <section className="address mt-10">
        <h2 className="font-bold text-2xl mb-5">Address/Contact</h2>
        <Contact data={props.data} modelOpen={openModal} />
      </section>

      <section className="RelatedNews">
        {props.data.courses && (
          <Relatedcolleges
            data={props.data}
            heading={"Related Colleges"}
            vtype="v"
          />
        )}
      </section>

      <section className="news  mt-10">
        {props.data.courses && (
          <Relatednews
            data={props.data}
            heading={"Related News and Events"}
            vtype="h"
          />
        )}
        <Link className="viewAll-btn" to={""}>
          View All News and Events
        </Link>
      </section>
    </>
  );
}

export default CollegeScholarships;

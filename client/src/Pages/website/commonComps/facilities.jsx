import React from "react";
import { NavLink, Link } from "react-router-dom";

import { CONSTANT } from "./constants";

function Facilities(props) {
  const { data } = props;
  return (
    <>
      <section className="facilities mt-10">
        <h2 className="font-bold text-2xl mb-5">Facilities</h2>
        <ul>
          {data &&
            data.split(",").map((item, i) => (
              <li>
                <img
                  src={CONSTANT.FACILITIES[item].imgUrl}
                  style={{ width: "50px" }}
                />
                <span>{CONSTANT.FACILITIES[item].name}</span>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
export default Facilities;

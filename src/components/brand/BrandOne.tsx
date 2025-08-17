import React from "react";
import BrandItem from "./BrandItem";
import SectionTitle from "../elements/section-title/SectionTitle";

const BrandOne = () => {
  return (
    <div className="section section-padding-2 bg-color-dark">
      <div className="container">
        <SectionTitle
          subtitle="Top Clients"
          title="Trusted by"
          description="We help startups, enterprises, and innovators bring hardware and software solutions to life and trusted by clients across sectors."
          textAlignment="heading-light-left"
          textColor=""
        />
        <div className="row">
          <BrandItem />
        </div>
      </div>
      <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1">
          <img src={"/images/others/line-9.png"} alt="Circle" />
        </li>
      </ul>
    </div>
  );
};

export default BrandOne;


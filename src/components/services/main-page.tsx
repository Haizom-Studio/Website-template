import React from "react";
import SectionTitle from "../elements/section-title/SectionTitle";
import ServicePropOne from "./ServicePropOne";

export default function MainPageService() {
  return (
    <div className="section section-padding bg-color-light">
      <div className="container">
        <SectionTitle subtitle="What We Can Do For You" title="Services we can <br> help you with" description="" textAlignment="heading-left" textColor="" />
        <div className="row">
          <ServicePropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" itemShow={6} marginTop="no" />
        </div>
      </div>
    </div>
  );
}

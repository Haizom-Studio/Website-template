"use client"

import BcrumbBannerOne from "@/components/elements/breadcrumb/BcrumbBannerOne";
import SectionTitle from "@/components/elements/section-title/SectionTitle";
import ServicePropOne from "@/components/services/ServicePropOne";
;
import React from "react";

function page() {
  return (
    <div className="section section-padding bg-color-light">
    <div className="container">
      <SectionTitle  title="Services we can <br> help you with" description="" textAlignment="heading-left" textColor="" />
      <div className="row">
        <ServicePropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" itemShow={6} marginTop="no" />
      </div>
    </div>
  </div>
  );
}

export default page;

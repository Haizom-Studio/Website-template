"use client"

import BrandItem from "@/components/brand/BrandItem";
import CtaLayoutOne from "@/components/cta/CtaLayoutOne";
import BcrumbBannerOne from "@/components/elements/breadcrumb/BcrumbBannerOne";
import React from "react";

export default function page() {
  return (
    <div>
      <BcrumbBannerOne title="Our Clients" paragraph="We work closely with our clients in order to deliver the best results" styleClass="thumbnail-2" mainThumb="/images/banner/banner-thumb-2.png" />
      <div className="section brand-wrap-area bg-color-dark">
        <div className="container">
          <div className="row">
            <BrandItem />
          </div>
        </div>
      </div>
      <CtaLayoutOne />
    </div>
  );
}

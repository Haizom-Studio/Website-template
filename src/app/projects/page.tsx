"use client"

import BcrumbBannerOne from "@/components/elements/breadcrumb/BcrumbBannerOne";
import ProjectOne from "@/components/project/ProjectOne";
import React from "react";

function page() {
  return (
    <div>
      <BcrumbBannerOne
        title="Our Projects"
        paragraph="A quick view of industry specific problems solved with design by the awesome team at Abstrak.
                "
        styleClass=""
        mainThumb="/images/banner/banner-thumb-1.png"
      />
      <ProjectOne />
      {/* <CtaLayoutOne /> */}
    </div>
  );
}

export default page;

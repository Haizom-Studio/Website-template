"use client"

import AboutFive from "@/components/about/AboutFive";
import AboutThree from "@/components/about/AboutThree";
import BcrumbBannerOne from "@/components/elements/breadcrumb/BcrumbBannerOne";
import SectionTitle from "@/components/elements/section-title/SectionTitle";
import ServicePropOne from "@/components/services/ServicePropOne";

export default function page() {
  return (
    <main className="main-wrapper">
      <BcrumbBannerOne title="One of the fastest growing agency" paragraph="We design and develop web and mobile applications for our clients worldwide." styleClass="thumbnail-4" mainThumb="/images/banner/banner-thumb-3.png" />

      <div className="section section-padding">
        <div className="container">
          <SectionTitle subtitle="What We Can Do For You" title="Services we can <br> help you with" description="" textAlignment="heading-left mb--20 mb_md--70" textColor="" />
          <div className="row">
            <ServicePropOne colSize="col-lg-4" serviceStyle="service-style-2" itemShow={3} marginTop="yes" />
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1">
            <img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" />
          </li>
          <li className="shape shape-2">
            <img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" />
          </li>
          <li className="shape shape-3">
            <img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" />
          </li>
        </ul>
      </div>

      <AboutFive />
      <AboutThree />

    </main>
  );
}

"use client"

import FormTwo from "@/components/contact/FormTwo";
import BreadCrumbOne from "@/components/elements/breadcrumb/BreadCrumbOne";
import React from "react";

export default function page() {
  return (
    <div>
      <BreadCrumbOne title="Contact" page="Contact" />

      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="contact-form-box shadow-box mb--30">
                <h3 className="title">Contact us now to get the quote for your required services</h3>
                <FormTwo />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
              <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                <h4 className="title">Phone</h4>
                <p>Our office is open from Mon-Sat, 8:00 am to 11:00 pm</p>
                <h4 className="phone-number">
                  <a href="tel:+923345577900">+92 334-5577900</a>
                </h4>
              </div>
              <div className="contact-info mb--30">
                <h4 className="title">Email</h4>
                <p>Our support team will get back to you within 12-h during standard business hours.</p>
                <h3 className="phone-number">
                  <a href="mailto:contact@mbdengineering.com" className="text-[10px]">contact@mbdengineering.com</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled shape-group-12">
          <li className="shape shape-1">
            <img src={"/images/others/bubble-2.png"} alt="Bubble" />
          </li>
          <li className="shape shape-2">
            <img src={"/images/others/bubble-1.png"} alt="Bubble" />
          </li>
          <li className="shape shape-3">
            <img src={"/images/others/circle-3.png"} alt="Circle" />
          </li>
        </ul>
      </div>
    </div>
  );
}

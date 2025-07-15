"use client";

import React, { useState } from "react";
import OffcanvasMenu from "./OffcanvasMenu";
import StickyHeader from "./StickyHeader";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import "./header.css"

const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const OffcanvasHandleClose = () => setShowOffcanvas(false);
  const OffcanvasHandleShow = () => setShowOffcanvas(true);

  const sticky = StickyHeader(100);

  const MobileMenuHandler = () => {
    const mobileMenuPopup = document.querySelector(".mobilemenu-popup");
    if (mobileMenuPopup) {
      mobileMenuPopup.classList.toggle("show");
    }

    const body = document.querySelector("body");
    if (body) {
      body.classList.toggle("mobilemenu-show");
    }

    const elements = document.querySelectorAll(".mobilemenu-popup .menu-item-has-children > a");

    elements.forEach((element) => {
      element.addEventListener("click", function () {
        const submenu = element.parentElement?.querySelector(".axil-submenu");
        if (submenu) {
          submenu.classList.toggle("active");
        }
        element.classList.toggle("open");
      });
    });
  };

  return (
    <>
      <header className="header axil-header header-style-1">
        <div className={`axil-mainmenu ${sticky ? "axil-sticky" : ""}`}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">{/* <Logo limage="/images/logo.svg" dimage="/images/logo-3.svg" simage="/images/logo-2.svg" /> */}</div>
              <div className="header-main-nav">
                <Nav />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="sidemenu-btn d-lg-block d-none">
                    <button className="btn-wrap" onClick={OffcanvasHandleShow}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                    <button className="btn-wrap" onClick={MobileMenuHandler}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    {/* <SwitcherHeader /> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <OffcanvasMenu offcanvasShow={showOffcanvas} offcanvasHide={OffcanvasHandleClose} />
      <MobileMenu MobileHandler={MobileMenuHandler} />
    </>
  );
};

export default Navbar;

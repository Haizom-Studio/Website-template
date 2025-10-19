import React from "react";
import Link from "next/link";

interface ServiceCTAProps {
  serviceTitle: string;
}

const ServiceCTA = ({ serviceTitle }: ServiceCTAProps) => {
  return (
    <div className="section section-padding bg-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="cta-content text-white">
              <h2 className="cta-title mb-4">
                Ready to get started with {serviceTitle}?
              </h2>
              <p className="cta-description mb-5 fs-5">
                Let's discuss your project requirements and create something amazing together. 
                Our team is ready to help you achieve your goals.
              </p>
              <div className="cta-buttons">
                <Link 
                  href="/contact-us" 
                  className="btn btn-light btn-lg me-3 mb-3"
                >
                  Get Free Quote
                </Link>
                <Link 
                  href="/projects" 
                  className="btn btn-outline-light btn-lg mb-3"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;

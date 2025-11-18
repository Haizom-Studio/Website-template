"use client"
import ServiceData from "../../../data/service/ServiceMain.json";
import BcrumbBannerOne from "@/components/elements/breadcrumb/BcrumbBannerOne";
import SectionTitle from "@/components/elements/section-title/SectionTitle";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceCTA from "@/components/services/ServiceCTA";
import { slugify } from "@/utils";

interface Props {
  params: {
    slug: string;
  };
}

export const runtime = "edge";

export default function ServiceDetailsPage({ params }: Props) {
  const { slug } = params; 

  const service = ServiceData.find(
    (item) =>
      item &&
      item.title &&
      slug === slugify(item.title)
  );

  if (!service) {
    return (
      <div className="section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h1>Service not found</h1>
                <p>The service you're looking for doesn't exist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb Banner with Overlay Content */}
      <div style={{ position: 'relative' }}>
        <BcrumbBannerOne
          title={service.title}
          paragraph={service.description}
          styleClass=""
          mainThumb={service.image}
        />
        
        {/* Desktop: Buttons below description and Picture overlay */}
        <div className="d-none d-lg-block" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 3, pointerEvents: 'none' }}>
          <div className="container" style={{ position: 'relative', height: '100%' }}>
            <div className="row" style={{ height: '100%' }}>
              <div className="col-lg-6" style={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '280px' }}>
                <div className="service-actions" style={{ marginTop: '180px' }}>
                  <a href="#contact" className="btn btn-primary btn-lg me-3">
                    Get Started
                  </a>
                  <a href="#process" className="btn btn-outline-primary btn-lg">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-lg-6" style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <div className="service-image fade-in">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="img-fluid rounded shadow"
                    style={{ maxWidth: '550px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Service Overview */}
      <div className="section section-padding d-lg-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <div className="service-overview fade-in">
                {/* <div className="service-icon mb-4">
                  <img src={service.image} alt={service.title} className="img-fluid" style={{maxWidth: '80px'}} />
                </div> */}
                {service.cate && (
                  <span className="badge bg-primary fs-6 mb-4">{service.cate}</span>
                )}
                <div className="service-actions mt-4 d-flex flex-column flex-sm-row gap-2 gap-sm-3">
                  <a href="#contact" className="btn btn-primary btn-lg">
                    Get Started
                  </a>
                  <a href="#process" className="btn btn-outline-primary btn-lg">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image fade-in">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="img-fluid rounded shadow w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Benefits */}
      <div className="section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                subtitle="Why Choose This Service"
                title={`Key Benefits of Our <br> ${service.title} Service`}
                description="Discover the advantages that make our service the right choice for your business needs."
                textAlignment="heading-center"
                textColor=""
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="benefit-item text-center">
                <div className="benefit-icon mb-3">
                  <i className="fas fa-rocket text-primary fs-1"></i>
                </div>
                <h5>Fast Implementation</h5>
                <p>Quick turnaround times without compromising on quality.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="benefit-item text-center">
                <div className="benefit-icon mb-3">
                  <i className="fas fa-dollar-sign text-primary fs-1"></i>
                </div>
                <h5>Cost Effective</h5>
                <p>Competitive pricing with transparent, no-hidden-fee structure.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="benefit-item text-center">
                <div className="benefit-icon mb-3">
                  <i className="fas fa-users text-primary fs-1"></i>
                </div>
                <h5>Expert Team</h5>
                <p>Experienced professionals with proven track records.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Process */}
      {service.process && (
        <div id="process" className="section section-padding bg-color-light">
          <div className="container">
            <SectionTitle
              subtitle={service.process.sectionSub}
              title={service.process.sectionTitle}
              description={service.process.para}
              textAlignment="heading-center"
              textColor=""
            />
            <ServiceProcess processSteps={service.process.steps} />
          </div>
        </div>
      )}

      {/* Service Features */}
      <div className="section section-padding">
        <div className="container">
          <SectionTitle
            subtitle="Why Choose Us"
            title={`What makes our <br> ${service.title} service special?`}
            description="We deliver exceptional results through our proven methodology and experienced team."
            textAlignment="heading-center"
            textColor=""
          />
          <ServiceFeatures service={service} />
        </div>
    </div>

      {/* Call to Action */}
      <div id="contact">
        <ServiceCTA serviceTitle={service.title} />
      </div>
    </>
  );
}

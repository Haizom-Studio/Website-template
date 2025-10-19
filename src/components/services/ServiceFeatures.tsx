import React from "react";

interface Service {
  title: string;
  description: string;
  image: string;
  cate?: string;
}

interface ServiceFeaturesProps {
  service: Service;
}

const ServiceFeatures = ({ service }: ServiceFeaturesProps) => {
  // Define features based on service category or title
  const getServiceFeatures = (service: Service) => {
    const features = [
      {
        icon: "fas fa-check-circle",
        title: "Expert Team",
        description: "Our experienced professionals bring years of industry expertise to every project."
      },
      {
        icon: "fas fa-clock",
        title: "Fast Delivery",
        description: "We understand the importance of time and deliver projects within agreed timelines."
      },
      {
        icon: "fas fa-shield-alt",
        title: "Quality Assurance",
        description: "Rigorous testing and quality checks ensure the highest standards in all deliverables."
      },
      {
        icon: "fas fa-headset",
        title: "24/7 Support",
        description: "Round-the-clock support to address any concerns or questions you may have."
      },
      {
        icon: "fas fa-cogs",
        title: "Custom Solutions",
        description: "Tailored approaches that meet your specific business requirements and objectives."
      },
      {
        icon: "fas fa-chart-line",
        title: "Proven Results",
        description: "Track record of successful projects and satisfied clients across various industries."
      }
    ];

    // Customize features based on service type
    if (service.title.toLowerCase().includes('design')) {
      features[0] = {
        icon: "fas fa-palette",
        title: "Creative Design",
        description: "Innovative and visually appealing designs that capture your brand essence."
      };
      features[1] = {
        icon: "fas fa-mobile-alt",
        title: "Responsive Design",
        description: "Designs that work perfectly across all devices and screen sizes."
      };
    } else if (service.title.toLowerCase().includes('development')) {
      features[0] = {
        icon: "fas fa-code",
        title: "Modern Technologies",
        description: "Using the latest technologies and frameworks for robust, scalable solutions."
      };
      features[1] = {
        icon: "fas fa-database",
        title: "Scalable Architecture",
        description: "Built to grow with your business and handle increasing demands."
      };
    } else if (service.title.toLowerCase().includes('marketing')) {
      features[0] = {
        icon: "fas fa-bullhorn",
        title: "Strategic Marketing",
        description: "Data-driven marketing strategies that deliver measurable results."
      };
      features[1] = {
        icon: "fas fa-chart-bar",
        title: "Analytics & Reporting",
        description: "Comprehensive analytics to track performance and optimize campaigns."
      };
    }

    return features;
  };

  const features = getServiceFeatures(service);

  return (
    <div className="row">
      {features.map((feature, index) => (
        <div className="col-lg-4 col-md-6 mb-4" key={index}>
          <div className="feature-card h-100 p-4 border rounded shadow-sm">
            <div className="feature-icon mb-3">
              <i className={`${feature.icon} text-primary fs-1`}></i>
            </div>
            <h5 className="feature-title mb-3">{feature.title}</h5>
            <p className="feature-description text-muted">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceFeatures;

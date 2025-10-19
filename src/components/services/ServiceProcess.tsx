import React from "react";

interface ProcessStep {
  id?: number;
  thumb: string;
  subtitle: string;
  title: string;
  paragraph: string;
}

interface ServiceProcessProps {
  processSteps: ProcessStep[];
}

const ServiceProcess = ({ processSteps }: ServiceProcessProps) => {
  return (
    <div className="row">
      {processSteps.map((step, index) => (
        <div className="col-lg-3 col-md-6" key={step.id || index}>
          <div className="process-step text-center">
            <div className="step-thumbnail mb-4">
              <img 
                src={step.thumb} 
                alt={step.title} 
                className="img-fluid"
                style={{ maxWidth: '120px', height: '120px', objectFit: 'contain' }}
              />
            </div>
            <div className="step-content">
              <span className="step-number text-primary fw-bold mb-2 d-block">
                {step.subtitle}
              </span>
              <h4 className="step-title mb-3">{step.title}</h4>
              <p className="step-description">{step.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceProcess;

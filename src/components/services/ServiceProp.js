import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";

const ServiceProp = ({ colSize, serviceStyle, serviceData }) => {
  return (
    <>
      {serviceData.map((data, index) => (
        <div className={colSize} key={index}>
          <div className={`services-grid ${serviceStyle}`}>
            <div className="thumbnail">
              <img src={data.image} alt="icon" />
            </div>
            <div className="content">
              <h5 className="title">
                <Link to={`/service-details/${slugify(data.title)}`}>
                  {data.title}
                </Link>
              </h5>
              <p>{data.description}</p>
              <Link
                to={`/service-details/${slugify(data.title)}`}
                className="more-btn"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceProp;

import React from "react";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";
import Link from "next/link";

interface ServicePropOneProps {
  colSize: string;
  serviceStyle: string;
  itemShow: number;
  marginTop: string;
}

const AllData = ServiceData;

const ServicePropOne = ({
  colSize,
  serviceStyle,
  itemShow,
  marginTop,
}: ServicePropOneProps) => {
  const topMargin = (index: number) => {
    if (marginTop === "yes") {
      if (index === 0) {
        return "mt--200 mt_md--0";
      } else if (index === 1) {
        return "mt--100 mt_md--0";
      } else {
        return "mt--0";
      }
    } else {
      return "";
    }
  };

  console.log(AllData.slice(0, itemShow));

  return (
    <>
      {AllData.slice(0, itemShow).map((data, index) => (
        <div className={`${colSize} ${topMargin(index)}`} key={index}>
          <div className={`services-grid ${serviceStyle}`}>
            <div className="thumbnail">
              <img src={data.image} alt="icon" />
            </div>
            <div className="content">
              <h5 className="title">
                <Link href={`/service-details/${slugify(data.title)}`}>
                  {data.title}
                </Link>
              </h5>
              <p>{data.description}</p>
              <Link
                href={`/service-details/${slugify(data.title)}`}
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

export default ServicePropOne;

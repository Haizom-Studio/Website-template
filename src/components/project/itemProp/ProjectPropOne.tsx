import React from "react";
import { slugify } from "../../../utils";
import Link from "next/link";

interface PropOneProps {
  projectStyle: string;
  portfolio: any;
}

const PropOne = ({ projectStyle, portfolio }: PropOneProps) => {
  return (
    <>
      <div className={`project-grid ${projectStyle}`}>
        <div className="thumbnail">
          <Link href={process.env.PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>
            <img src={process.env.PUBLIC_URL + portfolio.image} alt="icon" />
          </Link>
        </div>
        <div className="content">
          <h4 className="title">
            <Link href={process.env.PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>{portfolio.title}</Link>
          </h4>
          <span className="subtitle">
            {portfolio.category.map((cat: string, i: number) => (
              <span key={i}>{cat}</span>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};

export default PropOne;

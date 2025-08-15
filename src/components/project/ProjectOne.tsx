import React, { useState, useEffect } from "react";
import ProjectData from "../../data/project/ProjectData.json";
import SectionTitle from "../elements/section-title/SectionTitle";
import PropOne from "./itemProp/ProjectPropOne";

const AllData = ProjectData;

interface ProjectOneProps {
  parentClass?: string;
  colSize?: string;
  itemShow?: number;
  columnGap?: string;
}

const ProjectOne = ({
  parentClass,
  colSize,
  itemShow,
  columnGap,
}: ProjectOneProps) => {
  const [getAllItems] = useState(AllData);
  const [visiableProject] = useState(itemShow ? itemShow : 6);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState<any>([]);

  return (
    <>
      <div
        className={`section section-padding-2 ${
          parentClass ? parentClass : ""
        }`}
      >
        <div className="container">
          <SectionTitle
            subtitle="Our Project"
            title="Some of our <br>
                        finest work."
            textAlignment="heading-left mb--40"
            textColor=""
            description=""
          />

          <div className={`row ${columnGap ? columnGap : "row-35"}`}>
            {AllData.map((data: any) => (
              <div className={colSize ? colSize : "col-md-6"} key={data.id}>
                <PropOne projectStyle="" portfolio={data} />
              </div>
            ))}
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1">
            <img src={"/images/others/circle-2.png"} alt="circle" />
          </li>
          <li className="shape shape-2">
            <img src={"/images/others/bubble-2.png"} alt="Line" />
          </li>
          <li className="shape shape-3">
            <img src={"/images/others/bubble-1.png"} alt="Line" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectOne;

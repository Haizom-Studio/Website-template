import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ limage, dimage, simage }) => {
  return (
    <Link to={"/"}>
      <img className="light-version-logo" src={limage} alt="logo" />
      <img className="dark-version-logo" src={dimage} alt="logo" />
      <img className="sticky-logo" src={simage} alt="logo" />
    </Link>
  );
};

export default Logo;

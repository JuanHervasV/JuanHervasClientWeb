import React from "react";
import AboutMeLogo from "../../../assets/img/png/about-me.png";

import "./AboutMe.scss";

export default function AboutMe() {
  return (
    <div className="about-me">
      <img src={AboutMeLogo} alt="Juan Hervas" />
      <h1>About Me...</h1>
    </div>
  );
}

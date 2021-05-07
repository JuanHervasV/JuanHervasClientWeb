import React from "react";
import LogoWhite from "../../../../assets/img/png/logo-white.png";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Juan Hervas" />
      <h4>
        "You can mass-produce hardware; you cannot mass-produce software; you
        cannot mass:produce the human mind" {<br></br>}-Michio Kaku
      </h4>
      <SocialLink />
    </div>
  );
}

import React from "react";
import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/img/svg/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../../assets/img/svg/github.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.facebook.com/juan.hervas.376/"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>

      <a
        href="https://www.linkedin.com"
        className="linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>

      <a
        href="https://github.com/JuanHervasV"
        className="github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

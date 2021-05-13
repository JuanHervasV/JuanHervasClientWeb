import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks";
import { getMenuApi } from "../../../api/menu";
import logoWhite from "../../../assets/img/png/logo-white.png";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import "./MenuTop.scss";

export default function MenuTop() {
  return (
    <div className="menuinfos">
      <div className="logo">
        <Link to={"/"}>
          <img src={logoWhite} alt="Juan Hervas" />
        </Link>
      </div>
      <Navigation className="navi" />
      <MobileNavigation className="mobi" />
    </div>
  );
}

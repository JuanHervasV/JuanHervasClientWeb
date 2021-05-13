import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks";
import { getMenuApi } from "../../../api/menu";
import logoWhite from "../../../assets/img/png/logo-white.png";

const NavLinks = (props) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    getMenuApi().then((response) => {
      const arrayMenu = [];
      response.menu.forEach((item) => {
        item.active && arrayMenu.push(item);
      });
      setMenuData(arrayMenu);
    });
  }, []);
  return (
    <Menu className="menu-top-web" mode="horizontal">
      {menuData.map((item) => {
        const external = item.url.indexOf("http") > -1 ? true : false;

        if (external) {
          return (
            <Menu.Item
              key={item._id}
              className="menu-top-web__item"
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </Menu.Item>
          );
        }

        return (
          <Menu.Item
            key={item._id}
            className="menu-top-web__item"
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <Link to={item.url}>{item.title}</Link>
          </Menu.Item>
        );
      })}
      <SocialLinks />
    </Menu>
  );
};

export default NavLinks;

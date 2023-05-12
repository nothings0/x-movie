import React from "react"
import { Link, useLocation } from "react-router-dom"
const logo = require("../assets/Logo.png")
const home = require("../assets/Icon.png")
const movie = require("../assets/camera.png")
const tv = require("../assets/tv.png")
const settings = require("../assets/Settings.png")
const recent = require("../assets/Recent.png")

const menuNav = [
  {
    text: "home",
    icon: home,
    path: "/",
  },
  {
    text: "movie",
    icon: movie,
    path: "/movie",
  },
  {
    text: "tv show",
    icon: tv,
    path: "/tv",
  },
  {
    text: "recent",
    icon: recent,
    path: "/recent",
  },
  {
    text: "settings",
    icon: settings,
    path: "/settings",
  }
];
const LeftSide = () => {

  const { pathname } = useLocation()
  const active = menuNav.findIndex(e => e.path === `/${pathname.split("/")[1]}`);

  return (
    <>
      <div className="left-side">
      <div className="left-side__logo">
        <Link to="/">
          <img srcSet={`${logo} 2x`} alt="" />
        </Link>
      </div>
      <div className={"left-side__link"}>
        <div className="left-side__link__menu">
          <div className="left-side__link__heading">menu</div>
          <div className="left-side__link__wrap">
            {menuNav.map((item, index) => (
              <Link to={item.path} key={index}>
                <div className={`left-side__link__item ${index === active ? 'active' : ''}`}>
                    <img srcSet={`${item.icon} 2x`} alt="" />
                    <span className="left-side__link__item__text">{item.text}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default LeftSide;

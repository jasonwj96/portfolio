import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(true);

  useEffect(() => {
    const parent = document.getElementById("navbar-container").parentElement;

    if (darkTheme) {
      parent.id = "dark";
    } else {
      parent.id = "light";
    }
  }, [darkTheme]);

  useEffect(() => {
    const bars = document.getElementsByClassName("overlay-bar");
    const navbarInfo = document.getElementById("overlay-info");

    return () => {
      if (toggleMenu) {
        bars[0].style.animationName = "expandOverlay";
        bars[0].style.animationDelay = "0s";
        bars[1].style.animationName = "expandOverlay";
        bars[2].style.animationName = "expandOverlay";
        bars[2].style.animationDelay = "0.5s";
        navbarInfo.style.animationName = "showText";
        navbarInfo.style.animationDelay = "0.7s";
      } else {
        navbarInfo.style.animationName = "hideText";
        navbarInfo.style.animationDelay = "0s";
        bars[0].style.animationName = "collapseOverlay";
        bars[0].style.animationDelay = "0.5s";
        bars[1].style.animationName = "collapseOverlayReverse";
        bars[2].style.animationName = "collapseOverlay";
        bars[2].style.animationDelay = "0s";
      }
    };
  }, [toggleMenu]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const expandMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div id="navbar-container">
      <div id="navbar-top">
        <div id="brand">
          <p>J</p>
          <p>W</p>
          <div id="bar" />
        </div>
        <button id="toggle-btn" onClick={toggleTheme}>
          {darkTheme ? (
            <i className="fas fa-sun" />
          ) : (
            <i className="fas fa-moon" />
          )}
        </button>
        <button id="menu-btn" onClick={expandMenu}>
          {toggleMenu ? (
            <i className="fas fa-bars" />
          ) : (
            <i className="fas fa-times" />
          )}
        </button>
      </div>
      <div id="navbar-overlay">
        <div className="overlay-bar" />
        <div className="overlay-bar reverse" />
        <div className="overlay-bar" />
        <div id="overlay-info">
          <div id="overlay-linkset">
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  About me
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Skills
                </Link>
              </li>

              <li>
                <Link className="link" to="/">
                  How it was made
                </Link>
              </li>
            </ul>
          </div>
          <div id="overlay-contact">
            <p>Panama</p>
            <p>jasonwj96@gmail.com</p>
            <p>+507 6705-5071</p>
            <p>jasonwj96@gmail.com</p>
            <p>Ciudad Belén, Tocumen, calle La Alianza, casa N°33</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);
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
    const overlay = document.getElementById("navbar-overlay");
    const navbarContainer = document.getElementById("navbar-container");

    return () => {
      if (toggleMenu) {
        overlay.style.display = "flex";
        navbarContainer.style.height = "100%";
        bars[0].style.animationName = "expandOverlay";
        bars[1].style.animationName = "expandOverlay";
        bars[2].style.animationName = "expandOverlay";
        navbarInfo.style.animationName = "showText";
      } else {
        navbarInfo.style.animationName = "hideText";
        bars[0].style.animationName = "collapseOverlay";
        bars[1].style.animationName = "collapseOverlayReverse";
        bars[2].style.animationName = "collapseOverlay";

        setTimeout(() => {
          navbarContainer.style.height = "auto";
        }, 350);
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
        </div>
        <div id="buttons-wrapper">
          <button id="language-btn">
            <i className="fas fa-globe-americas" />
          </button>
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
      </div>

      <div id="navbar-overlay">
        <div className="overlay-bar" />
        <div className="overlay-bar reverse" />
        <div className="overlay-bar" />
        <div id="overlay-info">
          <div id="overlay-linkset">
            <ul onClick={expandMenu}>
              <li>
                <Link className="link" to="/#homeProfile-container">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/#education">
                  Education
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

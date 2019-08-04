import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

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

    if (toggleMenu) {
      bars[0].style.animationName = "expandOverlay";
      bars[1].style.animationName = "expandOverlay";
      bars[2].style.animationName = "expandOverlay";
    } else {
      bars[0].style.animationName = "collapseOverlay";
      bars[1].style.animationName = "collapseOverlay";
      bars[2].style.animationName = "collapseOverlay";
    }
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
          <p>JW</p>
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
          <i className="fas fa-bars" />
        </button>
      </div>
      <div id="navbar-overlay">
        <div className="overlay-bar" />
        <div className="overlay-bar flip" />
        <div className="overlay-bar" />
        <div className="overlay-links">
          <ul className="overlay-linkset">
            <li>
              <Link className="link" to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <p>Projects</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

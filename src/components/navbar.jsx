import React, { useState, useEffect } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const parent = document.getElementById("navbar-container").parentElement;

    if (darkTheme) {
      parent.id = "dark";
    } else {
      parent.id = "light";
    }
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
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
        <button id="menu-btn">
          <i className="fas fa-bars" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

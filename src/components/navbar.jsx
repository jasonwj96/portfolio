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
  });

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div id="navbar-container">
      <div id="navbar-top">
        <div id="brand">
          <p>JW</p>
        </div>
        <button id="toggle-btn" onClick={toggleTheme}>
          {darkTheme ? <i class="fas fa-moon" /> : <i class="fas fa-sun" />}
        </button>
      </div>

      <p>Navbar works</p>
    </div>
  );
};

export default Navbar;

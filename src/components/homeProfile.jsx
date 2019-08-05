import React, { useState, useEffect } from "react";
import "./homeProfile.scss";
import profilebg from "../img/profilebg.jpg";

const HomeProfile = () => {
  return (
    <div id="homeProfile-container">
      <div>
        <h1>Jason Wedderburn</h1>
        <h3>Fullstack developer</h3>
        <div className="separator" />
        <p>My name is Jason Alejandro Wedderburn Johnson, I'm 22 years old</p>
      </div>
      <div id="profile-img">
        <img src={profilebg} alt="Profile image" />
      </div>
    </div>
  );
};

export default HomeProfile;

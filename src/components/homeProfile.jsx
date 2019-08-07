import React from "react";
import "./homeProfile.scss";
import profilebg from "../img/profilebg.jpg";

const HomeProfile = () => {
  return (
    <div id="homeProfile-container">
      <div>
        <h1>Jason Wedderburn</h1>
        <h3>Fullstack developer</h3>
        <div className="separator" />
        <p>
          My name is Jason Alejandro Wedderburn Johnson, I'm 22 years old. I was
          born on August 28th, 1996, in Panama City, Panama. Currently I'm a
          student at the Technologial University of Panama.
        </p>
      </div>
      <div id="profile-img">
        <img src={profilebg} alt="Profile" />
        <div id="profile-img-overlay">
          <i className="fas fa-map-marker-alt" />
          <p>Panama City, Panama</p>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;

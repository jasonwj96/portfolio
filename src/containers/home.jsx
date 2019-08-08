import React, { useEffect } from "react";
import "./home.scss";
import HomeProfile from "../components/homeProfile";
import Timeline from "../components/timeline";
import Navbar from "../components/navbar";

const Home = () => {
  useEffect(() => {
    document.title = "Jason Wedderburn - Home";
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <HomeProfile />
      <Timeline />
    </div>
  );
};

export default Home;

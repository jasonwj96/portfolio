import React, { useEffect } from "react";
import "./home.scss";
import HomeProfile from "../components/homeProfile";
import Timeline from "../components/timeline";

const Home = () => {
  useEffect(() => {
    document.title = "Jason Wedderburn - Home";
  }, []);

  return (
    <>
      <HomeProfile />
      <Timeline />
    </>
  );
};

export default Home;

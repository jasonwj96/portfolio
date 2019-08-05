import React, { useEffect } from "react";
import "./home.scss";
import HomeProfile from "../components/homeProfile";

const Home = () => {
  useEffect(() => {
    document.title = "Jason Wedderburn - Home";
  }, []);

  return <HomeProfile />;
};

export default Home;

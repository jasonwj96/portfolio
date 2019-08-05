import React, { useEffect } from "react";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Jason Wedderburn - Home";
  }, []);

  return <p />;
};

export default Home;

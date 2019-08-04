import React, { useEffect } from "react";
import "./home.scss";

const Home = () => {
  useEffect(() => {
    document.title = "Jason Wedderburn - Home";
  }, []);

  return (
    <div className="home-container">
      <p>Home works</p>
    </div>
  );
};

export default Home;

import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/home";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="App" id="dark">
      <Router>
        <Navbar />
        <Route exact to="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;

import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/home";

const App = () => {
  return (
    <div className="App" id="dark">
      <Router>
        <Route exact to="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;

// Peinemann.nl
import { Switch, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="discover">Discover Movies</Link>;
        <Link to="/about">About this page</Link>;<Link to="/">Homepage</Link>;
      </nav>
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

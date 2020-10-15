// Peinemann.nl
import axios from "axios";
import { Switch, Route, NavLink } from "react-router-dom";
import React from "react";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <nav>
        <li>
          <NavLink to="/" exact={true}>
            Homepage
          </NavLink>
          ;
        </li>
        <li>
          <NavLink to="discover">Discover Movies</NavLink>;
        </li>
        <li>
          <NavLink to="/about">About this page</NavLink>;
        </li>
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

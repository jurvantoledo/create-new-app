// Peinemann.nl
import { Switch, Route, NavLink } from "react-router-dom";
import React from "react";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <React.StrictMode>
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
          <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
          <Route path="/movies/:imdbID" component={MoviePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </React.StrictMode>
  );
}

export default App;

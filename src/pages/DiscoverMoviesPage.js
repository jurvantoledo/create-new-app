import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, setMovies] = useState({ status: "idle", data: [] });
  const history = useHistory();

  const search = async () => {
    console.log("Start searching for:", searchText, { status: "searching" });

    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=a62d4167&s=${queryParam}`
    );

    console.log("Success!", response.data.Search);
    setMovies({ status: "done", data: response.data.Search });
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>
        {movies.data.map((movie) => {
          console.log(movie);
          return (
            <div key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                <h3>{movie.Title}</h3>
              </Link>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* */

import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const params = useParams();
  const [searchText, set_searchText] = useState();
  const [movies, setMovies] = useState({ status: "idle", data: [] });
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${params.searchtext}&y=2018&apikey=a7462395`
        );

        console.log(response.data);
        if (response.data.Response === "False") {
          setMovies({
            status: "error",
            data: [],
            message: response.data.Error,
          });
        } else {
          setMovies({ status: "success", data: response.data.Search });
        }
      } catch (error) {
        setMovies({
          status: "error",
          data: [],
          message: error.message,
        });
      }
      set_searchText(params.searchtext);
    }
    fetchData();
  }, [params.searchtext]);

  const search = () => {
    const routeParam = encodeURIComponent(
      { status: "loading", data: [] },
      searchText
    );
    history.push(`/discover/${routeParam}`);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <div>{movies.status === "error" ? movies.message : movies.status}</div>
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

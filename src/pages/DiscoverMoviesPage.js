import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const params = useParams();
  const history = useHistory();
  const [searchText, set_searchText] = useState(params.query || "");
  const [movies, setMovies] = useState({ status: "idle", data: [] });

  function search() {
    console.log(searchText);
    history.push(`/discover/${searchText}`);
  }

  useEffect(() => {
    if (params.query === undefined || params.query === "") {
      return;
    }
    async function fetchData() {
      setMovies({ status: "loading", data: [] });
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${params.query}&apikey=a62d4167`
        );
        console.log("Success!", response.data);
        if (response.data.Response === false) {
          setMovies({
            status: "Error",
            data: [],
            message: response.data.Error,
          });
        } else {
          setMovies({ status: "Succes!", message: response.data.Search });
        }
      } catch (error) {
        setMovies({ status: "Error", data: [], message: error.message });
      }
    }
    set_searchText(params.query);

    fetchData();
  }, [params.imdbID]);

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

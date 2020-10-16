import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const params = useParams();
  const [movieData, set_movieData] = useState({
    data: [],
    status: "idle",
  });

  console.log("render", movieData);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${params.imdbID}&apikey=a62d4167`
      );
      console.log("Success!", response);
      set_movieData({ status: "done", data: response.data });
    }
    fetchData();
  }, [params.imdbID]);

  return (
    <div>
      <h1>{movieData.data?.Title}</h1>
      <div>
        <img src={movieData.data?.Poster} alt={movieData.data?.Title} />
      </div>
      <p>{movieData.data?.Genre}</p>
      <p>{movieData.data?.imdbRating}</p>
    </div>
  );
}

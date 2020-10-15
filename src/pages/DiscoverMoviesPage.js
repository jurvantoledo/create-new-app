import React, { useState } from "react";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const search = async () => {
    console.log("TODO search movies for:", searchText);
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    const data = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=a62d4167${queryParam}`
    );

    console.log("Succes", data);
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
    </div>
  );
}

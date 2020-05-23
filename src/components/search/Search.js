import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import "../../App.css";

function Search() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchCharacter = async () => {
    console.log("searching...");
    let queryString = "";
    if (search) {
      queryString = `?name=${search}`;
    }
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${queryString}`
    );
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    searchCharacter();
  }, [search, searchCharacter]);

  console.log(data);

  return loading ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
    <div className="results-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputField"
          placeholder="Enter your character name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="results">
        <ul>
          {data.results.slice(0, 10).map((item) => (
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>
                <img alt={item.name} src={item.image} />
                <span className="name"> Name: {item.name}</span>
                <span className="name"> Species: {item.species}</span>
                <span className="name"> Status: {item.status}</span>
                <span className="name"> Created: {item.created}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;

import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import Search from "./components/search/Search";
import Details from "./components/details/Details";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/" className="background">
          <h1>Home</h1>
        </Link>
      </header>
      <Router>
        <Search path="/" />
        <Details path="details/:id" />
      </Router>
    </div>
  );
}

export default App;

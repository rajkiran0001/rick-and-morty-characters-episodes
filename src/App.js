import React from "react";
import {Router, Link} from '@reach/router';
import "./App.css";
import Search from './components/search/Search'
import Details from './components/details/Details'

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Router>
        <Search path="/"/>
        <Details path="details/:id"/>
        </Router>
      </header>
    </div>
  );
}

export default App;

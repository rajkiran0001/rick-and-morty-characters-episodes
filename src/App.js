import React from "react";
import {Link} from '@reach/router';
import "./App.css";
import Search from './components/search/search'

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Search path="/"/>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import {Link} from '@reach/router';

import "./App.css";
import Search from './components/search/Search'

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Search/>
      </header>
    </div>
  );
}

export default App;

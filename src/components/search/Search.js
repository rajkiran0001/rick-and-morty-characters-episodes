import React, {useState} from 'react';
import '../../App.css';

function Search() {
    const [query, setQuery] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        console.log("clicked");
        
    };


    return (
        <div className="results-wrapper">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="input"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="results">
                <ul>

                </ul>
            </div>
        </div>
    );
}

export default Search;
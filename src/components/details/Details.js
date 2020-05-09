import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Details(route) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getCharacter = async () => {
        console.log('searching...');
        console.log('route:', route);
        const result = await axios(
            `https://rickandmortyapi.com/api/character/${route.id}`
        );
        console.log('result:', result);
        setData(result.data);
        setLoading(false);
    };

    useEffect(() => {
        getCharacter();
    }, []);

    return loading ? (
        <p>Loading...</p>

    ) : (
        <div >
            <img alt={data.image} src={data.image} />
            <h1 className="heading">Name: {data.name}</h1>
            <div >
                Gender: {data.gender} <span>Origin: ({data.origin.name})</span>
            </div>
            <div >
                <h1 className="episode">Episodes</h1>
            {data.episode.map(item => (
                <p key={item}>{item}</p>
            ))}
            </div>
        </div>
    );
}

export default Details;

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
            <h1>{data.name}</h1>
            <div >
                {data.species} <span>({data.status})</span>
            </div>
            <div >
                <i/> {data.location.name}
            </div>
        </div>
    );
}

export default Details;

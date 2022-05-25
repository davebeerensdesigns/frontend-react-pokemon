import React, {useEffect, useState} from 'react';
import PokemonCard from "../pokemon-card/PokemonCard";
import axios from "axios";

function PokemonList() {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async (url) => {
        await axios.get(url).then(
            (response) => {
                setData(response.data);
                setLoading(false);
            }
        ).catch(
            (error) => {
                console.error(error)
            }
        )
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);



    return (
        <div className='pokemon-card__list'>
            {loading && <div>Loading</div>}

            {!loading && (
                <>
                    <button disabled={!data.previous}
                            onClick={() => {
                                setUrl(data.previous)
                            }}>Previous
                    </button>
                    <button disabled={!data.next}
                            onClick={() => {
                                setUrl(data.next)
                            }}>Next
                    </button>
                    {
                        data.results.map(pokemon => {
                            return (<PokemonCard key={pokemon.name}
                                                 pokemon={pokemon.url}/>)
                        })
                    }
                </>
            )}
        </div>
    );
}

export default PokemonList;
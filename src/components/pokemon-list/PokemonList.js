import React from 'react';
import useFetchData from "../../services/UseFetchData";
import PokemonCard from "../pokemon-card/PokemonCard";

function PokemonList({url}) {
    const {
        data,
        loading,
    } = useFetchData(url);

    return (
        <div className='pokemon-card__list'>
            {loading && <div>Loading</div>}

            {!loading && (
                data.results.map(pokemon => {
                    return (<PokemonCard key={pokemon.name} pokemon={pokemon.url}  />)
                })
            ) }
        </div>
    );
}

export default PokemonList;
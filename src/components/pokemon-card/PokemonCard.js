import React from 'react';
import useFetchData from "../../services/UseFetchData";

function PokemonCard({pokemon}) {
    const {
        data,
        loading,
    } = useFetchData(pokemon);

    return (
        <div className='pokemon-card'>
            <div className='pokemon-card__content'>
                {loading && <div>Loading</div>}
                {!loading && (
                    <>
                        <div className='pokemon-card__header'>
                            <h3>{data.name}</h3>
                        </div>
                        <div className='pokemon-card__image'>
                            <img src={data.sprites.front_default}
                                 alt='sprite default front'/>
                        </div>
                        <div className='pokemon-card__meta'>
                            <p><b>Moves:</b> {data.moves.length}</p>
                            <p><b>Weight:</b> {data.weight}</p>
                        </div>
                        <div className='pokemon-card__abilities'>
                            <p><b>Abilities:</b></p>
                            <ul>
                                {data.abilities.map((ability, index) => {
                                    return <li key={index}>{ability.ability.name}</li>
                                })}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default PokemonCard;
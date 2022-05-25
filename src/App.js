import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from "./components/pokemon-card/PokemonCard";
import axios from "axios";



// TODO: 4. Ga nu eens kijken hoe je een lijst van 20 pokémon namen kunt ophalen in App.js. Welk endpoint heb je dan nodig?
// TODO: 5. Map over deze resultaten heen en render voor elk resultaat een pokémon op de pagina!
// TODO: 6. Maak twee knoppen en bekijk de documentatie voor het ophalen van een lijst van pokémons nog eens goed. Wanneer de gebruiker op 'volgende' klikt, willen we een nieuw request doen naar een nieuw endpoint. En we willen dat het ophalen van data getriggerd wordt, wanneer het endpoint wordt veranderd.

function App() {

    return (
        <div className='pokemon-card__list'>
            <PokemonCard pokemon='https://pokeapi.co/api/v2/pokemon/jigglypuff' />
            <PokemonCard pokemon='https://pokeapi.co/api/v2/pokemon/ditto' />
        </div>
    );
}

export default App;

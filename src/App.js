import React from 'react';
import './App.css';
import PokemonList from "./components/pokemon-list/PokemonList";


// TODO: 6. Maak twee knoppen en bekijk de documentatie voor het ophalen van een lijst van pokémons nog eens goed. Wanneer de gebruiker op 'volgende' klikt, willen we een nieuw request doen naar een nieuw endpoint. En we willen dat het ophalen van data getriggerd wordt, wanneer het endpoint wordt veranderd.

function App() {

    return (
        <PokemonList url='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20' />
    );
}

export default App;

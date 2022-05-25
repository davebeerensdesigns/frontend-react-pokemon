import React from 'react';
import './App.css';
import PokemonList from "./components/pokemon-list/PokemonList";
import Logo from './assets/pokemon-logo.png';


// TODO: 6. Maak twee knoppen en bekijk de documentatie voor het ophalen van een lijst van pokémons nog eens goed. Wanneer de gebruiker op 'volgende' klikt, willen we een nieuw request doen naar een nieuw endpoint. En we willen dat het ophalen van data getriggerd wordt, wanneer het endpoint wordt veranderd.

function App() {

    return (
        <div className='page'>
            <img className='logo' src={Logo} alt='Pokemon logo'/>
            <PokemonList />
        </div>
    );
}

export default App;

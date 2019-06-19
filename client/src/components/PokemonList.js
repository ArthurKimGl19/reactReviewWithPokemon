import React from 'react';
import PokemonListItem from './PokemonListItem.js';

var PokemonList = (props) => {
  return (
    <div id="pokemonList">
    {props.pokemon.map( pokemon =>
      <PokemonListItem pokemon={pokemon}/>      
      )}
    </div>
   ) 
}
export default PokemonList;
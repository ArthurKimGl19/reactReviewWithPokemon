import React from 'react';


var PokemonListItem = (props) => {
  return (
    <div className="pokemonItem">
      <div>{props.pokemon.name}</div>
      <div>{props.pokemon.id}</div>
      <img src={props.pokemon.sprites.front_default} alt="pokemon image"/>
    </div>     
  )
}

export default PokemonListItem;
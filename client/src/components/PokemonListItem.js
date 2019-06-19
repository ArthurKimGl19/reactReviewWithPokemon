import React from 'react';

var PokemonListItem  = (props) => {
  return (
//     // {console.log('Props pokemon ' + props.pokemon)}
    <div className="pokemonItem">
       <div>Name: {props.pokemon.name}</div>
       <div>Id: {props.pokemon.id}</div>
       <img src={props.pokemon.sprites.front_default} alt="pokemon image"/> 
     </div>    
  )
}

export default PokemonListItem;
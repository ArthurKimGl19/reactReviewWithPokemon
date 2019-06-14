import React from 'react';
import PokemonListItem from './PokemonListItem.js'

class PokemonList extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div id="pokemonList">
        {/*want to map through pokemon data and invoke PokemonList fn */}
        {this.props.pokemon.map(monster =>
          <PokemonListItem pokemon={monster}/>
        )}
    </div> 
    )
  }
}

export default PokemonList;
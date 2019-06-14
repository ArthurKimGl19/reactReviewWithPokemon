import React from 'react';
import PokemonListItem from './PokemonListItem.js'

// class PokemonList extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {

//     }
//   }
//   render() {
//     return (
//       <div id="pokemonList">
//         {/*want to map through pokemon data and invoke PokemonList fn */}
//         {this.props.pokemon.map(monster =>
//           <PokemonListItem pokemon={monster}/>
//         )}
//     </div> 
//     )
//   }
// }

//when we are creating components, we want to default to stateless
//and then change it to stateful components (classes) when we need to
var PokemonList = (props) => {
  return (
    <div id="pokemonList">
      {/*want to map through pokemon data and invoke PokemonList fn */}
      {props.pokemon.map(monster =>
        <PokemonListItem pokemon={monster}/>
      )}
  </div> 
  )
}

export default PokemonList;
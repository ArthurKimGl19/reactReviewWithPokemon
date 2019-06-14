import React from 'react';
import Search from './Search.js';
import PokemonList from './PokemonList.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemon: []
    }
  }
  render() {
    return (
      <div>
       <Search />
       <PokemonList pokemon={this.state.pokemon}/>
      </div>   
    )
  }
  //after render we do this componentDidMount
  componentDidMount(){
    // setState() {
    //   this.state.pokemon = this.props.pokemon;
    // }
    
    //when component mounts
    //we run set State, which is a method of our class App
    //set State takes in an object with a key that is the key in our state
    //and the value we want to be inside the key inside the state
    this.setState({pokemon: this.props.pokemon});    
    //** Currently havent passed down state past PokemonList */
  }
}

export default App;
import React from 'react';
import PokemonList from './PokemonList.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon : []
    }
  }
  //want to create a new function
  componentDidMount(){
    //we use spread, since setState grabs a copy of the state
    //which is [] atm, and puts stuff inside this.props.pokemon inside it

    //i tried not initializing pokemon in this.state
    //but it doesnt run unless i set a value for pokmeon in this.state
    this.setState({
      pokemon: this.props.pokemon
    })
  }
  render () {
    return (
    <div>
    <Search />
    <PokemonList pokemon={this.state.pokemon}/>
    {/* {console.log('State ' + this.state.pokemon)} */}
    {/* Why is my state not updating when set state is run*/}
    </div>
    )   
  }
}
export default App;
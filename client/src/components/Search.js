import React from 'react';
const axios = require('axios');

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    //need to bind this to this particular class
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onSearchChange(event) {
    //on change it will update the state
    var newValue = event.target.value.toLowerCase();
    this.setState({
      value: newValue
    })
    console.log('Current Value ' + event.target.value)
  }
  onHandleSubmit(event){
    event.preventDefault();
    //on pressing submit it will print out what I have in state
    console.log(JSON.stringify('Submitting Value ' + this.state.value))
    //want to send an axios get request 
    //our get req is going to go to exact pokemon link of what we submit
    axios.get('https://pokeapi.co/api/v2/pokemon/' + this.state.value)
      //based on response
      .then(function(response){
        //based on response, we want to update our state and render said pokemon we searched
        console.log(response);
      })
      //handle error
      .catch(function(error){
        console.log(error);
      });
  }
  render () {
    return (
      <div>
      <form action="" >
        <input type="text" onChange={this.onSearchChange} value={this.state.value.toLowerCase()}/>
        <button onClick={this.onHandleSubmit}>Submit</button>
      </form>
      </div>
    )
  }
}

export default Search;
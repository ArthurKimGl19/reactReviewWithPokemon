import React from 'react';

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
    this.setState({
      value: event.target.value
    })
    console.log('Current Value ' + event.target.value)
  }
  onHandleSubmit(event){
    //on pressing submit it will print out what I have in state
    console.log(JSON.stringify('Submitting Value' + this.state.value))
  }
  render () {
    return (
      <div>
      <form action="" >
        <input type="text" onChange={this.onSearchChange} value={this.state.value}/>
        <button onClick={this.onHandleSubmit}>Submit</button>
      </form>
      </div>
    )
  }
}

export default Search;
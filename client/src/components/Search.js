import React from 'react';

//need to create a class to hold our state (which will hold our search value)

//need to create an OnChange function and a HandleSubmit function
//OnChange is for when a change is detected in our search bar

//HandleSubmit is when we press submit
//we want to preventDefault so that it doesnt auto refresh the page

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    //bind our two functions to this class object
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(event) {
    //when it detects a change i want it to change the state
    //use setState to change the state
    this.setState({value: event.target.value})
    console.log(event.target.value)
  }

  handleSubmit(event){
    //want to have form not refresh when we press submit
    event.preventDefault();
    console.log(this.state.value)

  }
  
  //need to input our functions into our component
  render () {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value= {this.state.value} onChange= {this.onChange}/>
        <button>Submit</button>
      </form>
    </div>
    )
  }
}

export default Search;
 
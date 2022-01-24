import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// this function is a component
// which is a function that returns html

class App extends Component{
  constructor(){
    super();
    this.state ={
      string: 'Hello Beni Zubi'
    }
  }
  render() {
    return(
      // className is a JSX because class means something else in js and jsx uses className to distinguish between the two
      // also the use of { } within the html tags forms javascript expression.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {this.state.string} </p>

        <button onClick={()=> this.setState({string:'Hello Zubi'})}> Change Text</button>
      </header>
    </div>
    )
  }
  
}

export default App;

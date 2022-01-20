import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// this function is a component
// which is a function that returns html

class App extends Component{
  constructor(){
    super();
    this.state ={
      string: 'Hello Zubi'
    }
  }
  render() {
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {this.state.string} </p>
        <button> Change Text</button>
      </header>
    </div>
    )
  }
  
}

export default App;

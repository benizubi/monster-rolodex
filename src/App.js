import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// this function is a component
// which is a function that returns html

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'a'
        },
        {
          name: "Dracula",
          id: 'b'
        },
        {
          name: "Zombie",
          id: 'c'
        }
      ]
    }

  }
  render() {
    return(
    <div className="App">
        {
          this.state.monsters.map(monster =>
            <h1 key={monster.id}> {monster.name}</h1>)
        }
    </div>
    )
  }
  
}

export default App;

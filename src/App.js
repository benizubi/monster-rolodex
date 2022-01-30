import React from 'react';
import logo from './logo.svg';
import './App.css';

// this function is a component
// which is a function that returns html

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      monsters: []
    }  
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  
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

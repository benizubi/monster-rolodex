import React from 'react';
import { CardList } from './components/card-list/card-list.component';
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
        <CardList monsters={ this.state.monsters} >
        
        </CardList>
      
    </div>
    )
  }
  
}

export default App;

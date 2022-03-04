import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

// this function is a component
// which is a function that returns html

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state)
        }
      ));
 }

  render() {
    console.log('render')
    return(
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(e) =>
            this.setState(
              { searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters} />
    </div>
    )
  }
  
}

export default App;

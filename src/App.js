import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

// this function is a component
// which is a function that returns html

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
      
    };
    console.log('constructor')
  }
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state)
          }
        ));
  }

  render() {
    console.log('render')
    
    const filteredMonsters = this.state.monsters.filter((mon) => {
      return mon.name.toLowerCase().includes(searchString);
    });
    
    
    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            console.log(event.target.value);
            // to lower case search string.
            const searchString = event.target.value.toLowerCase();
            //  search filtering 
            const filteredMonsters = this.state.monsters.filter((mon) => {
              return mon.name.toLowerCase().includes(searchString);
            // includes plays a role of a boolean, also its not case sensitive.thus, have to use tolowercase.
            });
            this.setState(() => {
              return { monsters: filteredMonsters };
            })
            // now I have set the original array to return the filtered result.
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name} </h1>
            </div>
          );
        })}
      </div>
      
    );
  }
}


export default App;

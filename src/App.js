import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
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
          }
        ));
  }
   onSearchChange = (event) => {
    // to lower case search string.
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    })
    // now I have set the original array to return the filtered result.
  }


  render() {
    console.log('render')
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
       //  search filtering 
       const filteredMonsters = monsters.filter((mon) => {
        return mon.name.toLowerCase().includes(searchField);
      // includes plays a role of a boolean, also its not case sensitive.thus, have to use tolowercase.
      });
    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}
        />
        <CardList
        id= "card-list"
          monsters={filteredMonsters} />
      </div>
      
    );
  }
}


export default App;

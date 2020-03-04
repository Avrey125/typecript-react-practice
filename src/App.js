import React, {Component} from 'react';
// import './App.css';
import CardList from './components/cardlist.jsx';
import SearchBox from './components/searchbox';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }



  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.username.toLowerCase().includes(searchField.toLowerCase())
    );
    // can also me written as:
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField

    return (
      <div className="App">
      {/* <input onChange={e => this.setState({ searchField: e.target.value}, () => {
        console.log(this.state)
      })} type="search" placeholder="Search Monsters"/> */}
      <SearchBox 
        placeholder="search for Monsters"
        handleChange={e => this.setState({ searchField: e.target.value}, () => {
          console.log(this.state)
        })}
      />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

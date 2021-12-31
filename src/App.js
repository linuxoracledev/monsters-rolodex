import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.compolnent';
import { Search } from './components/search-box/search-component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monstars: [],
      searchInputValue: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => this.setState({ monstars: users }));
  }

  changeHandler = e => { this.setState({ searchInputValue: e.target.value }) }

  render() {
    const { monstars, searchInputValue } = this.state;
    const filteredMonstar = monstars.filter(monstar => {
      return (monstar.name.toLowerCase().includes(searchInputValue));
    })

    return (
      <div className="App">
        <h1>Monstar Rolodex</h1>
        <div className='search'>
          <Search
            placeholderText='Search for monstars'
            changeHandler={this.changeHandler} />
        </div>
        <CardList monstarsProps={filteredMonstar} />
      </div>
    )
  }

}

export default App;

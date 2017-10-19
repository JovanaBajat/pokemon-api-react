import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputSearch from './components/InputSearch';
import DisplayPokemon from './components/DisplayPokemon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName : ''
    }
  }

  inputNumberPokemon = (num) => {
    this.setState({
      pokemonName : num
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pokemons</h1>
        </header>
      <InputSearch func={this.inputNumberPokemon}/>
      <DisplayPokemon num={this.state.pokemonName} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import pokedex from '../pokedex';
import Pokedex from './pokemon/Pokedex';

class App extends Component {

  state = {
    pokedex: pokedex,
    favorite: null
  };

  render() {
    const { pokedex } = this.state;
    return (
      
      <div>
        <h1>Pokedex!</h1>
        <Pokedex pokedex={pokedex}/>
      </div>
    );
  }
}

export default App;